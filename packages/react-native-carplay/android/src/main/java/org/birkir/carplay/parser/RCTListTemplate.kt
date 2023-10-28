package org.birkir.carplay.parser

import androidx.car.app.CarContext
import androidx.car.app.model.ListTemplate
import androidx.car.app.model.SectionedItemList
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.render.ReactCarRenderContext
import org.birkir.carplay.utils.EventEmitter

class RCTListTemplate(
  context: CarContext,
  renderContext: ReactCarRenderContext,
  eventEmitter: EventEmitter?
) : RCTTemplate(context, renderContext, eventEmitter) {

  override fun parse(config: ReadableMap): ListTemplate {
    return ListTemplate.Builder().apply {
      config.getString("title")?.let { setTitle(it) }

      // Actions
      config.getArray("actions")?.let {
        setActionStrip(
          parseActionStrip(it)
        )
      }

      // Header Action
      config.getMap("headerAction")?.let {
        setHeaderAction(
          parseAction(it)
        )
      }

      // Loading
      if (config.hasKey("loading")) {
        setLoading(config.getBoolean("loading"))
      }

      // Sections
      config.getArray("sections")?.let {
        for (i in 0 until it.size()) {
          val section = it.getMap(i)
          val header = section.getString("header");
          addSectionedList(
            SectionedItemList.create(
              parseItemList(section.getArray("items")),
              header ?: "Missing title"
            )
          )
        }
      };

      // Single List
      // @todo handle when sections and items are defined at once.
      config.getArray("items")?.let {
        setSingleList(
          parseItemList(it)
        )
      }

    }.build()
  }


  companion object {
    const val TAG = "RCTListTemplate"
  }
}
