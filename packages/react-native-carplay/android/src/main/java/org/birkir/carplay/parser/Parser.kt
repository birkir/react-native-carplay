package org.birkir.carplay.parser

import androidx.car.app.CarContext
import androidx.car.app.model.Pane
import androidx.car.app.model.PaneTemplate
import androidx.car.app.model.Template
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.screens.CarScreenContext

class Parser(
  context: CarContext,
  carScreenContext: CarScreenContext
) : RCTTemplate(context, carScreenContext) {
  override fun parse(props: ReadableMap): Template {
    return PaneTemplate.Builder(Pane.Builder().build()).build()
  }

}
