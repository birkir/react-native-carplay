package org.birkir.carplay;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import org.birkir.carplay.screens.HelloWorldScreen;

import androidx.car.app.CarAppService;
import androidx.car.app.Screen;
import androidx.car.app.Session;
import androidx.car.app.validation.HostValidator;

public final class CarPlayService extends CarAppService {
  private ReactInstanceManager mReactInstanceManager;
  private Screen screen;

  @Override
  public void onCreate() {
    super.onCreate();
    mReactInstanceManager = ((ReactApplication) getApplication()).getReactNativeHost().getReactInstanceManager();
  }

  @NonNull
  @Override
  public HostValidator createHostValidator() {
    return HostValidator.ALLOW_ALL_HOSTS_VALIDATOR;
  }

  @NonNull
  @Override
  public Session onCreateSession() {
    return new Session() {
      @NonNull
      @Override
      public Screen onCreateScreen(@NonNull Intent intent) {
        return new HelloWorldScreen(getCarContext());
      }
    };
  }
}
