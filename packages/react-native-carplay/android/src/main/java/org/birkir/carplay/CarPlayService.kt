package org.birkir.carplay

import android.content.Intent
import androidx.car.app.CarAppService
import androidx.car.app.Screen
import androidx.car.app.Session
import androidx.car.app.validation.HostValidator
import com.facebook.react.ReactApplication
import com.facebook.react.ReactInstanceManager
import org.birkir.carplay.screens.HelloWorldScreen

class CarPlayService : CarAppService() {
  private lateinit var reactInstanceManager: ReactInstanceManager
  override fun onCreate() {
    super.onCreate()
    reactInstanceManager =
      (application as ReactApplication).reactNativeHost.reactInstanceManager
  }

  override fun createHostValidator(): HostValidator {
    return HostValidator.ALLOW_ALL_HOSTS_VALIDATOR
  }

  override fun onCreateSession(): Session {
    return CarPlaySession(reactInstanceManager)
  }
}
