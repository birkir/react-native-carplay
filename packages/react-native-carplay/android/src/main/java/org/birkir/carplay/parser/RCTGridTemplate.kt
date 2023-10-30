package org.birkir.carplay.parser

import androidx.car.app.CarContext
import androidx.car.app.model.GridTemplate
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.screens.CarScreenContext

class RCTGridTemplate(
  context: CarContext,
  carScreenContext: CarScreenContext
) : RCTTemplate(context, carScreenContext) {

  override fun parse(props: ReadableMap): GridTemplate {
    return GridTemplate.Builder().apply {
      setLoading(props.isLoading())
      props.getString("title")?.let { setTitle(it) }
      props.getMap("headerAction")?.let { setHeaderAction(parseAction(it)) }
      props.getArray("actions")?.let { setActionStrip(parseActionStrip(it)) }
      this.setSingleList(
        parseItemList(props.getArray("buttons"), "grid")
      )
    }.build()
  }

  companion object {
    const val TAG = "RCTGridTemplate"
  }
}
