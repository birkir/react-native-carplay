package org.birkir.carplay.utils

import android.util.Log
import androidx.car.app.CarContext
import com.facebook.react.ReactRootView
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter

class EventEmitter(private var reactContext: ReactContext? = null) {

  companion object {
    const val DidConnect = "RNCarPlay.DidConnect"
    const val BackButton = "RNCarPlay.BackButton"
  }

  fun didConnect() {
    emit(EventEmitter.DidConnect, Arguments.createMap())
  }

  fun backButton() {
    emit(EventEmitter.BackButton, Arguments.createMap());
  }

  private fun emit(eventName: String, data: WritableMap) {
    if (reactContext == null) {
      Log.e("RNCarPlay", "Could not send event $eventName. React context is null!")
      return
    }
    val emitter = reactContext!!.getJSModule(RCTDeviceEventEmitter::class.java)
    emitter.emit(eventName, data)
  }
}
