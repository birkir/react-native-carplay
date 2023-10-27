package org.birkir.carplay.screens

import android.util.Log
import androidx.car.app.CarContext
import androidx.car.app.Screen
import androidx.car.app.model.Pane
import androidx.car.app.model.PaneTemplate
import androidx.car.app.model.Template
import androidx.car.app.navigation.model.NavigationTemplate
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.LifecycleOwner
import com.facebook.react.bridge.ReadableMap
import org.birkir.carplay.render.VirtualRenderer

class CarScreen(carContext: CarContext) : Screen(carContext) {

  private var template: Template? = null
  private var virtualRenderer: VirtualRenderer? = null

  init {
    lifecycle.addObserver(object: LifecycleEventObserver {
      override fun onStateChanged(source: LifecycleOwner, event: Lifecycle.Event) {
        if (event == Lifecycle.Event.ON_DESTROY && virtualRenderer != null) {
          Log.d(TAG, "onStateChanged: got $event, removing virtual renderer")
          virtualRenderer = null
        }
      }
    })
  }

  fun setTemplate(template: Template?, args: ReadableMap) {
    if (template is NavigationTemplate && virtualRenderer == null) {
      Log.d(TAG, "setTemplate: received navigation template with args: $args")
      val moduleName = args.getString("id")
      if (moduleName == null) {
        Log.w(
          TAG,
          "setTemplate: moduleName is null, please make sure you are setting id for map-template in ReactNative",
        )
        return
      }
      virtualRenderer = VirtualRenderer(carContext, moduleName)
    }
    this.template = template
  }

  override fun onGetTemplate(): Template {
    return template ?: PaneTemplate.Builder(
      Pane.Builder().setLoading(true).build()
    ).setTitle("RNCarPlay loading...").build()
  }

  companion object {
    const val TAG = "CarScreen"
  }
}
