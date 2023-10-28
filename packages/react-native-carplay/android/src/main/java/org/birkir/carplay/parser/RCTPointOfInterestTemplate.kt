package org.birkir.carplay.parser

import androidx.car.app.CarContext
import androidx.car.app.navigation.model.PlaceListNavigationTemplate
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.render.ReactCarRenderContext
import org.birkir.carplay.utils.EventEmitter

class RCTPointOfInterestTemplate(
  context: CarContext,
  renderContext: ReactCarRenderContext,
  eventEmitter: EventEmitter?
) : RCTTemplate(context, renderContext, eventEmitter) {

  override fun parse(props: ReadableMap): PlaceListNavigationTemplate {

    val builder = PlaceListNavigationTemplate.Builder();

    // implementation

    return builder.build();
  }

  companion object {
    const val TAG = "RCTPointOfInterestTemplate"
  }
}
