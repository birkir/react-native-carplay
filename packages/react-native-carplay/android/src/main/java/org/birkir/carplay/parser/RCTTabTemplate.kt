package org.birkir.carplay.parser

import android.util.Log
import androidx.car.app.CarContext
import androidx.car.app.model.Action
import androidx.car.app.model.CarIcon
import androidx.car.app.model.ItemList
import androidx.car.app.model.ListTemplate
import androidx.car.app.model.Row
import androidx.car.app.model.Tab
import androidx.car.app.model.TabContents
import androidx.car.app.model.TabTemplate
import androidx.car.app.model.TabTemplate.TabCallback
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.screens.CarScreenContext

class RCTTabTemplate(
  context: CarContext,
  carScreenContext: CarScreenContext
) : RCTTemplate(context, carScreenContext) {
  private val tabContentsMap = mutableMapOf<String, TabContents>()
  private val tabInfoMap = mutableMapOf<String, TabInfo>()
  private var currentTemplate: TabTemplate? = null
  private var activeTabId: String? = null
  private var isLoading: Boolean = false

  data class TabInfo(val title: String, val icon: CarIcon, val headerAction: Action)

  private val tabCallback = object : TabCallback {
    override fun onTabSelected(tabContentId: String) {
      Log.d(TAG, "Tab selected: $tabContentId")
      eventEmitter.didSelectTemplate(tabContentId)
      updateContents(tabContentId)
    }
  }

  override fun parse(props: ReadableMap): TabTemplate {
    tabInfoMap.clear()
    isLoading = props.isLoading()
    val builder = TabTemplate.Builder(tabCallback)
    builder.setLoading(isLoading)

    props.getArray("templates")?.let { templatesArray ->
      for (i in 0 until templatesArray.size()) {
        try {
          val tabProps = templatesArray.getMap(i)
          parseTabInfo(tabProps, builder)
        } catch (e: Exception) {
          Log.e(TAG, "Error parsing tab at index $i", e)
        }
      }

      // Set first tab as active
      tabInfoMap.keys.firstOrNull()?.let { firstTabId ->
        setActiveTab(builder, firstTabId)
      }
    }

    currentTemplate = builder.build()
    return currentTemplate!!
  }

  private fun parseTabInfo(tabProps: ReadableMap, builder: TabTemplate.Builder) {
    val id = tabProps.getString("id") ?: return
    val tab = parseTab(tabProps)
    builder.addTab(tab)

    val headerAction = tabProps.getMap("headerAction")?.let { parseAction(it) } ?: Action.APP_ICON
    tabInfoMap[id] = TabInfo(tab.title.toString(), tab.icon, headerAction)
  }

  private fun setActiveTab(builder: TabTemplate.Builder, tabId: String) {
    builder.setTabContents(getTabContents(tabId))
    builder.setActiveTabContentId(tabId)
    builder.setHeaderAction(tabInfoMap[tabId]?.headerAction ?: Action.APP_ICON)
    activeTabId = tabId
  }

  private fun buildCurrentTemplate() {
    val builder = TabTemplate.Builder(tabCallback).setLoading(isLoading)

    tabInfoMap.forEach { (id, info) ->
      builder.addTab(Tab.Builder()
        .setTitle(info.title)
        .setIcon(info.icon)
        .setContentId(id)
        .build())
    }

    activeTabId?.let { activeId ->
      setActiveTab(builder, activeId)
    }

    currentTemplate = builder.build()
  }

  private fun parseTab(props: ReadableMap): Tab {
    return Tab.Builder().apply {
      props.getString("id")?.let { setContentId(it) }
      val config = props.getMap("config")
      when {
        config != null -> {
          setTitle(config.getString("tabTitle") ?: DEFAULT_TAB_TITLE)
          setIcon(CarIcon.APP_ICON) // TODO: Parse custom icon if needed
        }
        else -> {
          setTitle(DEFAULT_TAB_TITLE)
          setIcon(CarIcon.APP_ICON)
        }
      }
    }.build()
  }

  private fun getTabContents(templateId: String): TabContents {
    return tabContentsMap.getOrPut(templateId) {
      val screen = carScreenContext.screens[templateId]
      val template = screen?.template

      when {
        template != null -> {
          Log.d(TAG, "Template found for $templateId: $template")
          TabContents.Builder(template).build()
        }
        else -> createDefaultTabContents(templateId)
      }
    }
  }

  private fun createDefaultTabContents(templateId: String): TabContents {
    val defaultItemList = ItemList.Builder()
      .addItem(Row.Builder().setTitle("No content available for $templateId").build())
      .build()
    val defaultTemplate = ListTemplate.Builder()
      .setTitle(DEFAULT_CONTENT_TITLE)
      .setSingleList(defaultItemList)
      .build()
    return TabContents.Builder(defaultTemplate).build()
  }

  private fun updateContents(tabContentId: String) {
    Log.d(TAG, "Updating contents for tab: $tabContentId")
    activeTabId = tabContentId
    buildCurrentTemplate()
    // Update the main tab screen with the new template
    carScreenContext.screens[carScreenContext.screenMarker]?.apply {
      setTemplate(currentTemplate, carScreenContext.screenMarker, null)
      invalidate()
    }
    Log.d(TAG, "Template updated for tab $tabContentId")
  }

  companion object {
    const val TAG = "RCTTabTemplate"
    private const val DEFAULT_TAB_TITLE = "Untitled Tab"
    private const val DEFAULT_CONTENT_TITLE = "Default Content"
  }
}
