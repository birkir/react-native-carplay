package org.birkir.carplay

import ReloadEvent
import android.content.Intent
import android.os.Handler
import android.os.Looper
import android.util.Log
import androidx.activity.OnBackPressedCallback
import androidx.car.app.AppManager
import androidx.car.app.CarContext
import androidx.car.app.CarToast
import androidx.car.app.ScreenManager
import androidx.car.app.model.Alert
import androidx.car.app.model.CarText
import androidx.car.app.model.ListTemplate
import androidx.car.app.model.Pane
import androidx.car.app.model.PaneTemplate
import androidx.car.app.model.Template
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.modules.debug.DevSettingsModule
import org.birkir.carplay.parser.TemplateParser
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
        eventEmitter?.backButtonPressed(screenManager?.top?.marker);
      }
    }
    carContext.onBackPressedDispatcher.addCallback(callback)
    eventEmitter?.didConnect();
  }

  private fun parseTemplate(
    config: ReadableMap,
    reactCarRenderContext: ReactCarRenderContext
  ): Template? {
    Log.d(TAG, "parseTemplate: $config")
    val factory = TemplateParser(carContext, reactCarRenderContext, eventEmitter)
    return factory.parse(config)
  }

  @ReactMethod
  fun invalidate(templateId: String) {
    handler.post {
      val screen = getScreen(templateId)
      if (screen === screenManager!!.top) {
        Log.d(TAG, "Invalidated screen $templateId");
        screen.invalidate()
      }
    }
  }

  @ReactMethod
  fun reload() {
    val devSettingsModule = reactContext.getNativeModule(
      DevSettingsModule::class.java
    )
    devSettingsModule?.reload()
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
  fun createTemplate(templateId: String?, config: ReadableMap, callback: Callback?) {
    Log.d(TAG, "Creating template $templateId")
    handler.post {
      val reactCarRenderContext = ReactCarRenderContext(templateId!!)
      val screen = CarScreen(carContext)
      screenManager = screen.screenManager
      reactCarRenderContextMap.remove(screen)
      reactCarRenderContextMap[screen] = reactCarRenderContext
      screen.marker = templateId
      try {
        val template = parseTemplate(config, reactCarRenderContext)
        screen.setTemplate(template, templateId)

        carScreens[templateId] = screen;
        callback?.invoke();
      } catch (err: IllegalArgumentException) {
        val args = Arguments.createMap();
        args.putString("error", "Failed to parse template '$templateId': ${err.message}");
        callback?.invoke(args);
      }
    }
  }

  @ReactMethod
  fun updateTemplate(templateId: String, config: ReadableMap) {
    val screen = getScreen(templateId)
    if (screen == null) {
      Log.d(TAG, "Screen $name not found!")
      return;
    }
    val reactCarRenderContext = ReactCarRenderContext(screen.marker!!)
    val template = parseTemplate(config, reactCarRenderContext)?.let {
      reactCarRenderContextMap.remove(screen)
      reactCarRenderContextMap[screen] = reactCarRenderContext
      val tpl = screen.template as ListTemplate;
      screen.setTemplate(it, templateId)
    }
  }

  @ReactMethod
  fun setRootTemplate(templateId: String, animated: Boolean?) {
    Log.d(TAG, "set Root Template for $templateId");
    handler.post {
      val screen = getScreen(templateId)
      if (screen != null) {
        currentCarScreen = screen;
        screenManager?.popToRoot();
        screenManager?.push(screen)
      }
    }
  }

  @ReactMethod
  fun toast(text: String, duration: Int) {
    CarToast.makeText(carContext, text, duration).show()
  }

  @ReactMethod
  fun alert() {
    val alert = Alert.Builder(1, CarText.Builder("Hello world").build(), 5000).apply {
    }.build();
    Log.d(TAG, "alert $alert");
    carContext.getCarService(AppManager::class.java).showAlert(alert);
  }

  @ReactMethod
  fun pushTemplate(templateId: String, animated: Boolean?) {
    handler.post {
      val screen = getScreen(templateId)
      if (screen != null) {
        screenManager?.push(screen)
      }
    }
  }

  @ReactMethod
  fun popToTemplate(templateId: String?, animated: Boolean?) {
    // void
  }

  @ReactMethod
  fun popTemplate(animated: Boolean?) {
    handler.post {
      screenManager!!.pop()
      removeScreen(currentCarScreen)
      currentCarScreen = screenManager!!.top as CarScreen
    }
  }

  @ReactMethod
  fun presentTemplate(templateId: String?, animated: Boolean?) {
    // void
  }

  @ReactMethod
  fun dismissTemplate(templateId: String?, animated: Boolean?) {
    // void
  }

  @ReactMethod
  fun addListener(eventName: String) {
    Log.d(TAG, "listener added $eventName");
  }

  @ReactMethod
  fun removeListeners(count: Int) {
    Log.d(TAG, "remove listeners $count");
  }

  private fun removeScreen(screen: CarScreen?) {
    val params = WritableNativeMap()
    params.putString("screen", screen!!.marker)
    carScreens.values.remove(screen)
  }

  private fun getScreen(name: String): CarScreen? {
    return carScreens[name]
  }

  companion object {
    const val NAME = "RNCarPlay"
    const val TAG = "CarPlay"
  }
}
