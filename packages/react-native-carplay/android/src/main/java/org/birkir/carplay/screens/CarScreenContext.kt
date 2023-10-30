package org.birkir.carplay.screens

import org.birkir.carplay.utils.EventEmitter
import java.util.WeakHashMap

data class CarScreenContext(
  val screenMarker: String,
  var eventEmitter: EventEmitter,
  var screens: WeakHashMap<String, CarScreen>
)
