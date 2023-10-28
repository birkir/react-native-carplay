package org.birkir.carplay.utils

import android.R.id
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter


class EventEmitter(private var reactContext: ReactContext? = null) {

  companion object {
    const val DidConnect = "didConnect"
    const val DidDisconnect = "didDisconnect"

    // interface
    const val BarButtonPressed = "barButtonPressed"
    const val BackButtonPressed = "backButtonPressed"
    const val DidAppear = "didAppear"
    const val DidDisappear = "didDisappear"
    const val WillAppear = "willAppear"
    const val WillDisappear = "willDisappear"
    const val ButtonPressed = "buttonPressed"

    // grid
    const val GridButtonPressed = "gridButtonPressed"

    // information
    const val ActionButtonPressed = "actionButtonPressed"

    // list
    const val DidSelectListItem = "didSelectListItem"

    // search
    const val UpdatedSearchText = "updatedSearchText"
    const val SearchButtonPressed = "searchButtonPressed"
    const val SelectedResult = "selectedResult"

    // tab bar
    const val DidSelectTemplate = "didSelectTemplate"

    // now playing
    const val UpNextButtonPressed = "upNextButtonPressed"
    const val AlbumArtistButtonPressed = "albumArtistButtonPressed"

    // poi
    const val DidSelectPointOfInterest = "didSelectPointOfInterest"

    // map
    const val MapButtonPressed = "mapButtonPressed"
    const val DidUpdatePanGestureWithTranslation = "didUpdatePanGestureWithTranslation"
    const val DidEndPanGestureWithVelocity = "didEndPanGestureWithVelocity"
    const val PanBeganWithDirection = "panBeganWithDirection"
    const val PanEndedWithDirection = "panEndedWithDirection"
    const val PanWithDirection = "panWithDirection"
    const val DidBeginPanGesture = "didBeginPanGesture"
    const val DidDismissPanningInterface = "didDismissPanningInterface"
    const val WillDismissPanningInterface = "willDismissPanningInterface"
    const val DidShowPanningInterface = "didShowPanningInterface"
    const val DidDismissNavigationAlert = "didDismissNavigationAlert"
    const val WillDismissNavigationAlert = "willDismissNavigationAlert"
    const val DidShowNavigationAlert = "didShowNavigationAlert"
    const val WillShowNavigationAlert = "willShowNavigationAlert"
    const val DidCancelNavigation = "didCancelNavigation"
    const val AlertActionPressed = "alertActionPressed"
    const val SelectedPreviewForTrip = "selectedPreviewForTrip"
    const val StartedTrip = "startedTrip"
  }

  fun didConnect() {
    Log.d("EventEmitter", "Did connect");
    emit(EventEmitter.DidConnect, Arguments.createMap())
  }

  fun didDisconnect() {
    emit(EventEmitter.DidDisconnect, Arguments.createMap());
  }

  fun buttonPressed(templateId: String, buttonId: String) {
    val event = Arguments.createMap();
    event.putString("templateId", templateId);
    event.putString("buttonId", buttonId);
    emit(EventEmitter.ButtonPressed, Arguments.createMap())
  }

  fun barButtonPressed(templateId: String, buttonId: String) {
    val event = Arguments.createMap();
    event.putString("templateId", templateId);
    event.putString("buttonId", buttonId);
    emit(EventEmitter.BarButtonPressed, event)
  }

  fun backButtonPressed(templateId: String?) {
    val event = Arguments.createMap();
    event.putString("templateId", templateId);
    emit(EventEmitter.BackButtonPressed, event)
  }

  fun didSelectListItem(templateId: String, id: String, index: Int) {
    val event = Arguments.createMap();
    event.putString("templateId", templateId);
    event.putString("id", id);
    event.putInt("index", index);
    emit(EventEmitter.DidSelectListItem, event);
  }

  fun gridButtonPressed(templateId: String, id: String, index: Int) {
    val event = Arguments.createMap();
    event.putString("templateId", templateId);
    event.putString("id", id);
    event.putInt("index", index);
    emit(EventEmitter.GridButtonPressed, event);
  }


  private fun emit(eventName: String, data: WritableMap) {
    if (reactContext == null) {
      Log.e("RNCarPlay", "Could not send event $eventName. React context is null!")
      return
    }
    reactContext!!
      .getJSModule(RCTDeviceEventEmitter::class.java)
      .emit(eventName, data)
  }
}
