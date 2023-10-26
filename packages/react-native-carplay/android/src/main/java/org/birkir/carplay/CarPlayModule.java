package org.birkir.carplay;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = CarPlayModule.NAME)
public class CarPlayModule extends ReactContextBaseJavaModule {

  private static ReactApplicationContext mReactContext;
  public static final String NAME = "RNCarPlay";

  public CarPlayModule(ReactApplicationContext reactContext) {
    super(reactContext);
    mReactContext = reactContext;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void checkForConnection() {
    // void
  }

  @ReactMethod
  public void createTemplate(String templateId, ReadableMap config) {
    // void
  }

  @ReactMethod
  public void setRootTemplate(String templateId, Boolean animated) {
    // void
  }

  @ReactMethod
  public void pushTemplate(String templateId, Boolean animated) {
    // void
  }

  @ReactMethod
  public void popToTemplate(String templateId, Boolean animated) {
    // void
  }

  @ReactMethod
  public void popTemplate(String templateId, Boolean animated) {
    // void
  }

  @ReactMethod
  public void presentTemplate(String templateId, Boolean animated) {
    // void
  }

  @ReactMethod
  public void dismissTemplate(String templateId, Boolean animated) {
    // void
  }
}
