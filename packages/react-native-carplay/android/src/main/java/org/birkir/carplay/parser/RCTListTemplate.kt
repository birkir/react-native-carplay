package org.birkir.carplay.parser

import androidx.car.app.CarContext
import androidx.car.app.model.ListTemplate
import androidx.car.app.model.SectionedItemList
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.screens.CarScreenContext

class RCTListTemplate(
  context: CarContext,
  screenContext: CarScreenContext
) : RCTTemplate(context, screenContext) {

  override fun parse(props: ReadableMap): ListTemplate {
    return ListTemplate.Builder().apply {
      props.getString("title")?.let { setTitle(it) }

      // Actions
      props.getArray("actions")?.let {
        setActionStrip(
          parseActionStrip(it)
        )
      }

      // Header Action
      props.getMap("headerAction")?.let {
        setHeaderAction(
          parseAction(it)
        )
      }

      // Loading
      setLoading(props.isLoading())

      // Sections
      props.getArray("sections")?.let {
        for (i in 0 until it.size()) {
          val section = it.getMap(i)
          val header = section.getString("header")
          addSectionedList(
            SectionedItemList.create(
              parseItemList(section.getArray("items")),
              header ?: "Missing title"
            )
          )
        }
      }

      // Single List
      // @todo handle when sections and items are defined at once.
      props.getArray("items")?.let {
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
