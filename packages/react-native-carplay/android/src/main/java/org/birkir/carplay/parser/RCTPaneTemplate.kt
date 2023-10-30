package org.birkir.carplay.parser

import androidx.car.app.CarContext
import androidx.car.app.model.PaneTemplate
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.screens.CarScreenContext

class RCTPaneTemplate(
  context: CarContext,
  carScreenContext: CarScreenContext
) : RCTTemplate(context, carScreenContext) {
  override fun parse(props: ReadableMap): PaneTemplate {
    val pane = parsePane(props.getMap("pane")!!)
    return PaneTemplate.Builder(pane).apply {
      props.getArray("actions")?.let { setActionStrip(parseActionStrip(it)) }
      props.getMap("headerAction")?.let { setHeaderAction(parseAction(it)) }
      props.getString("title")?.let { setTitle(it) }
    }.build()
  }

  companion object {
    const val TAG = "RCTPaneTemplate"
  }
}
