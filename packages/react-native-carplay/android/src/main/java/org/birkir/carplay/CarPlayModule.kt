package org.birkir.carplay

import ReloadEvent
import android.content.Intent
import android.os.Handler
import android.os.Looper
import androidx.activity.OnBackPressedCallback
import androidx.car.app.CarContext
import androidx.car.app.ScreenManager
import androidx.car.app.model.Pane
import androidx.car.app.model.PaneTemplate
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import org.birkir.carplay.render.ReactCarRenderContext
import org.birkir.carplay.screens.CarScreen
import org.birkir.carplay.utils.EventEmitter
import java.util.WeakHashMap

@ReactModule(name = CarPlayModule.NAME)
class CarPlayModule internal constructor(private val reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  private lateinit var carContext: CarContext
  private var currentCarScreen: CarScreen? = null
  private var screenManager: ScreenManager? = null
  private val carScreens: WeakHashMap<String, CarScreen> = WeakHashMap()
  private val reactCarRenderContextMap: WeakHashMap<CarScreen, ReactCarRenderContext> =
    WeakHashMap()
  private val handler: Handler = Handler(Looper.getMainLooper())
  private var eventEmitter: EventEmitter? = null

  init {
    reactContext.addLifecycleEventListener(object : LifecycleEventListener {
      override fun onHostResume() {
        eventEmitter = EventEmitter(reactContext)
      }
      override fun onHostPause() {}
      override fun onHostDestroy() {}
    })
  }

  override fun getName(): String {
      return NAME
  }

  fun setCarContext(carContext: CarContext, currentCarScreen: CarScreen) {
    this.carContext = carContext
    this.currentCarScreen = currentCarScreen
    screenManager = currentCarScreen.screenManager
    carScreens["root"] = this.currentCarScreen
    val callback: OnBackPressedCallback = object : OnBackPressedCallback(true) {
      override fun handleOnBackPressed() {
        eventEmitter?.backButton();
      }
    }
    carContext.onBackPressedDispatcher.addCallback(callback)
    eventEmitter?.didConnect();
  }

  @ReactMethod
  fun reload() {
    val intent = Intent("org.birkir.carplay.RELOAD_EVENT");
    reactContext.sendBroadcast(intent);
  }


  @ReactMethod
  fun setEventCallback(name: String, callback: Callback?) {
    val screen = getScreen(name) ?: return
    val reactCarRenderContext = reactCarRenderContextMap[screen] ?: return
    reactCarRenderContext.eventCallback = callback
  }

  @ReactMethod
  fun checkForConnection() {
    eventEmitter?.didConnect();
  }

  @ReactMethod
  fun createTemplate(templateId: String?, config: ReadableMap) {
    handler.post {
      val reactCarRenderContext = ReactCarRenderContext(templateId!!)
      val screen = CarScreen(carContext)
      screenManager = screen.screenManager
      reactCarRenderContextMap.remove(screen)
      reactCarRenderContextMap[screen] = reactCarRenderContext
      screen.marker = templateId

      val title = config.getString("title") ?: "stuff"
      val template = PaneTemplate.Builder(
          Pane.Builder().setLoading(true).build()
        ).setTitle(title).build();
      screen.setTemplate(template, config)
      carScreens[name] = screen
      currentCarScreen = screen
      screenManager!!.push(screen)
    }
  }

  @ReactMethod
  fun setRootTemplate(templateId: String?, animated: Boolean?) {
    // void
  }

  @ReactMethod
  fun pushTemplate(templateId: String?, animated: Boolean?) {
    // void
  }

  @ReactMethod
  fun popToTemplate(templateId: String?, animated: Boolean?) {
    // void
  }

  @ReactMethod
  fun popTemplate(templateId: String?, animated: Boolean?) {
    // void
  }

  @ReactMethod
  fun presentTemplate(templateId: String?, animated: Boolean?) {
    // void
  }

  @ReactMethod
  fun dismissTemplate(templateId: String?, animated: Boolean?) {
    // void
  }

  private fun getScreen(name: String): CarScreen? {
    return carScreens[name]
  }

  companion object {
    const val NAME = "RNCarPlay"
    const val TAG = "CarPlay"
  }
}
