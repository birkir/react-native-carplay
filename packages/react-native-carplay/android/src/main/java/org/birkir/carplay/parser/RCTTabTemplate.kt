package org.birkir.carplay.parser

import androidx.car.app.CarContext
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
  override fun parse(props: ReadableMap): TabTemplate {
    return TabTemplate.Builder(object : TabCallback {
      override fun onTabSelected(tabContentId: String) {
        eventEmitter.didSelectTemplate(tabContentId)
      }
    }).apply {
      setLoading(props.isLoading())
      props.getArray("templates")?.let {
        for (i in 0 until it.size()) {
          addTab(parseTab(it.getMap(i)))
        }
        // Apply and select first tab
        it.getMap(0).getString("id")?.let { it1 ->
          setTabContents(parseTabContents(it1))
          setActiveTabContentId(it1)
        }
      }
      props.getMap("headerAction")?.let { setHeaderAction(parseAction(it)) }
    }.build()
  }

  private fun parseTab(props: ReadableMap): Tab {
    return Tab.Builder().apply {
      props.getString("id")?.let { setContentId(it) }
      props.getString("title")?.let { setTitle(it) }
      props.getMap("icon")?.let { setIcon(parseCarIcon(it)) }
    }.build()
  }

  private fun parseTabContents(templateId: String): TabContents {
    val screen = carScreenContext.screens[templateId]!!
    return TabContents.Builder(screen.template!!).build()
  }

  companion object {
    const val TAG = "RCTTabTemplate"
  }
}
