package org.birkir.carplay.parser

import androidx.car.app.CarContext
import androidx.car.app.model.SearchTemplate
import androidx.car.app.model.SearchTemplate.SearchCallback
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.screens.CarScreenContext


class RCTSearchTemplate(
  context: CarContext,
  carScreenContext: CarScreenContext
) : RCTTemplate(context, carScreenContext) {
  override fun parse(props: ReadableMap): SearchTemplate {
    return SearchTemplate.Builder(object : SearchCallback {
      override fun onSearchTextChanged(searchText: String) {
        eventEmitter.updatedSearchText(searchText)
      }

      override fun onSearchSubmitted(searchText: String) {
        eventEmitter.searchButtonPressed(searchText)
      }
    }).apply {
      props.getArray("actions")?.let { setActionStrip(parseActionStrip(it)) }
      props.getMap("headerAction")?.let { setHeaderAction(parseAction(it)) }
      props.getString("initialSearchText")?.let {
        setInitialSearchText(it)
      }
      props.getArray("items")?.let { setItemList(parseItemList(it, "row")) }
      setLoading(props.isLoading())
      props.getString("searchHint")?.let { setSearchHint(it) }
      if (props.hasKey("showKeyboardByDefault")) {
        setShowKeyboardByDefault(props.getBoolean("showKeyboardByDefault"))
      }
    }.build()
  }

  companion object {
    const val TAG = "RCTSearchTemplate"
  }
}
