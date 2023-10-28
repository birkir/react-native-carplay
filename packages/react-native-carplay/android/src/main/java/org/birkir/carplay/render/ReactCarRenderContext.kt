package org.birkir.carplay.render

import com.facebook.react.bridge.Callback
import org.birkir.carplay.utils.EventEmitter

data class ReactCarRenderContext(val screenMarker: String, var eventCallback: Callback? = null)
