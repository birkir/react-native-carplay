package org.birkir.carplay.render

import com.facebook.react.bridge.Callback

data class ReactCarRenderContext(val screenMarker: String, var eventCallback: Callback? = null)
