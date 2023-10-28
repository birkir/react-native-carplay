package org.birkir.carplay

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.Bundle
import android.util.Log
import androidx.car.app.Screen
import androidx.car.app.Session
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactInstanceManagerBuilder
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.common.LifecycleState
import com.facebook.react.devsupport.HMRClient
import com.facebook.react.modules.appregistry.AppRegistry
import com.facebook.react.modules.core.TimingModule
import org.birkir.carplay.screens.CarScreen


class CarPlaySession(private val reactInstanceManager: ReactInstanceManager) : Session() {
  private lateinit var screen: CarScreen

  override fun onCreateScreen(intent: Intent): Screen {
    Log.d(TAG, "On create screen " + intent.action + " - " + intent.dataString)
    screen = CarScreen(carContext)
    screen.marker = "root"
    val filter = IntentFilter("org.birkir.carplay.RELOAD_EVENT")
    carContext.registerReceiver(reloadIntentReceiver, filter);
    runJsApplication()

    return screen
  }

  private val reloadIntentReceiver = object : BroadcastReceiver() {
    override fun onReceive(context: Context?, intent: Intent?) {
      reload()
    }
  }

  private fun reload() {
    val devSupportManager = reactInstanceManager.devSupportManager
    if (devSupportManager.hasUpToDateJSBundleInCache()) {
      devSupportManager.handleReloadJS()
    }
    screen = CarScreen(carContext)
    screen.marker = "root"
    val reactContext = reactInstanceManager.currentReactContext
    if (reactContext != null) {
      invokeStartTask(reactContext)
    }
  }

  private fun runJsApplication() {
    val reactContext = reactInstanceManager.currentReactContext
    if (reactContext == null) {
      reactInstanceManager.addReactInstanceEventListener(
        object : ReactInstanceManager.ReactInstanceEventListener {
          override fun onReactContextInitialized(reactContext: ReactContext) {
            invokeStartTask(reactContext)
            reactInstanceManager.removeReactInstanceEventListener(this)
          }

        })
      reactInstanceManager.createReactContextInBackground()
    } else {
      invokeStartTask(reactContext)
    }
  }

  private fun invokeStartTask(reactContext: ReactContext) {
    try {
      val catalystInstance = reactContext.catalystInstance
      val jsAppModuleName = "androidAuto"
      val appParams = WritableNativeMap()
      appParams.putDouble("rootTag", 1.0)
      val appProperties = Bundle.EMPTY
      if (appProperties != null) {
        appParams.putMap("initialProps", Arguments.fromBundle(appProperties))
      }

      catalystInstance.getJSModule(AppRegistry::class.java)
        .runApplication(jsAppModuleName, appParams)

      val timingModule = reactContext.getNativeModule(
        TimingModule::class.java
      )
      val carModule = reactInstanceManager
        .currentReactContext?.getNativeModule(CarPlayModule::class.java)
      carModule!!.setCarContext(carContext, screen)
      timingModule!!.onHostResume()

      // Handle reloading of the

    } catch (e: Exception) {
      e.printStackTrace()
    }
  }

  companion object {
    const val TAG = "CarPlaySession"
  }
}
