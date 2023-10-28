package org.birkir.carplay.parser

import androidx.car.app.CarContext
import androidx.car.app.model.Pane
import androidx.car.app.model.PaneTemplate
import androidx.car.app.model.Template
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.render.ReactCarRenderContext
import org.birkir.carplay.utils.EventEmitter

class TemplateParser internal constructor(
  private val context: CarContext,
  private val renderContext: ReactCarRenderContext,
  private val eventEmitter: EventEmitter?) {

  fun parse(props: ReadableMap): Template {
    val template = when (props.getString("type")) {
      "list" -> RCTListTemplate(context, renderContext, eventEmitter)
      "grid" -> RCTGridTemplate(context, renderContext, eventEmitter)
      "map" -> RCTMapTemplate(context, renderContext, eventEmitter)
      else -> null
    }

    return template?.parse(props) ?: PaneTemplate
      .Builder(
        Pane.Builder().setLoading(true).build()
      ).setTitle("Template missing").build()
  }
}
