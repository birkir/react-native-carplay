package org.birkir.carplay.parser

import com.facebook.react.bridge.ReadableMap

fun ReadableMap.isLoading(): Boolean {
  return try {
    getBoolean("loading")
  } catch (e: Exception) {
    return false
  }
}
