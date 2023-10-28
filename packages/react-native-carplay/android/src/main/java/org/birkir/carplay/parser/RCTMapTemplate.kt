package org.birkir.carplay.parser

import androidx.car.app.CarContext
import androidx.car.app.model.Header
import androidx.car.app.model.Pane
import androidx.car.app.model.Template
import androidx.car.app.navigation.model.MapTemplate
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.render.ReactCarRenderContext
import org.birkir.carplay.utils.EventEmitter

class RCTMapTemplate(
  context: CarContext,
  renderContext: ReactCarRenderContext,
  eventEmitter: EventEmitter?
) : RCTTemplate(context, renderContext, eventEmitter) {

  override fun parse(props: ReadableMap): Template {

    var header = Header.Builder().apply{
      setTitle("Title")
    }.build();
    val tpl = MapTemplate.Builder().apply {
      setHeader(header)
      setPane(Pane.Builder().setLoading(true).build())
    }.build();

    return tpl as Template;

//    return RoutePreviewNavigationTemplate.Builder().build();
  }

  companion object {
    const val TAG = "RCTMapTemplate"
  }
}
