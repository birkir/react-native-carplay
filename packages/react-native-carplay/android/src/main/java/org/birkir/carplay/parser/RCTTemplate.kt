package org.birkir.carplay.parser

import android.graphics.Bitmap
import android.text.Spannable
import android.text.SpannableString
import android.util.Log
import androidx.car.app.CarContext
import androidx.car.app.model.*
import androidx.car.app.model.Action.FLAG_IS_PERSISTENT
import androidx.car.app.model.Action.FLAG_PRIMARY
// import androidx.car.app.model.Template
import androidx.core.graphics.drawable.IconCompat
import com.facebook.common.references.CloseableReference
import com.facebook.datasource.DataSources
import com.facebook.drawee.backends.pipeline.Fresco
import com.facebook.imagepipeline.image.CloseableBitmap
import com.facebook.imagepipeline.request.ImageRequestBuilder
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.views.imagehelper.ImageSource
import org.birkir.carplay.render.ReactCarRenderContext
import org.birkir.carplay.utils.EventEmitter

/**
 * Base class for parsing the template based on the props passed from ReactNative
 *
 * @property context
 * @property renderContext
 */
abstract class RCTTemplate(
  protected val context: CarContext,
  protected val renderContext: ReactCarRenderContext,
  protected val eventEmitter: EventEmitter?
) {

  /**
   * Function that should be implemented by the children of this class
   *
   * @param props the props that was passed from the ReactNative
   * @return the template
   */
  abstract fun parse(props: ReadableMap): androidx.car.app.model.Template

  protected fun invokeCallback(callbackId: Int, parameters: WritableNativeMap? = null) {
    var params = parameters
    if (params == null) {
      params = WritableNativeMap()
    }
    params.putInt("id", callbackId)
    params.putString("screen", renderContext.screenMarker)
    renderContext.eventCallback!!.invoke(params)
  }

  protected fun parseCarIcon(map: ReadableMap): CarIcon {
    val source = ImageSource(context, map.getString("uri"))
    val imageRequest = ImageRequestBuilder.newBuilderWithSource(source.uri).build()
    val dataSource = Fresco.getImagePipeline().fetchDecodedImage(imageRequest, context)
    val result = DataSources.waitForFinalResult(dataSource) as CloseableReference<CloseableBitmap>
    val bitmap = result.get().underlyingBitmap

    CloseableReference.closeSafely(result)
    dataSource.close()

    return CarIcon.Builder(IconCompat.createWithBitmap(bitmap)).build()
  }

  protected fun parseColor(colorName: String?): CarColor {
    // @todo implement CarColor.createCustom(light: 0x00, dark: 0x00)
    // maybe use react native tooling for this

    return when (colorName) {
      "blue" -> CarColor.BLUE
      "green" -> CarColor.GREEN
      "primary" -> CarColor.PRIMARY
      "red" -> CarColor.RED
      "secondary" -> CarColor.SECONDARY
      "yellow" -> CarColor.YELLOW
      "default" -> CarColor.DEFAULT
      else -> CarColor.DEFAULT
    }
  }

  protected fun parseAction(map: ReadableMap?): Action {
    val type = map?.getString("type");
    if (type == "appIcon") {
      return Action.APP_ICON;
    } else if (type == "back") {
      return Action.BACK;
    } else if (type == "pan") {
      return Action.PAN;
    }
    val id = map?.getString("id");
    val builder = Action.Builder()
    if (map != null) {
      map.getString("title")?.let {
        builder.setTitle(it)
      }
      map.getMap("icon")?.let {
        val bitmap = getBitmapFromSource(it)
        val icon = IconCompat.createWithBitmap(bitmap)
        builder.setIcon(CarIcon.Builder(icon).build())
      }
      map.getString("visibility")?.let {
        if (it == "primary") {
          builder.setFlags(FLAG_PRIMARY);
        }
        if (it == "persistent") {
          builder.setFlags(FLAG_IS_PERSISTENT)
        }
      }
      try {
        builder.setBackgroundColor(parseColor(map.getString("backgroundColor")))
      } catch (e: Exception) {
        e.printStackTrace()
      }
      builder.setOnClickListener {
        if (id != null) {
          eventEmitter?.buttonPressed(renderContext.screenMarker, id)
        }
      }
    }
    return builder.build()
  }

  protected fun parseActionStrip(actions: ReadableArray): ActionStrip {
    val builder = ActionStrip.Builder()
    for (i in 0 until actions.size()) {
      val actionMap = actions.getMap(i)
      val action = parseAction(actionMap)
      builder.addAction(action)
    }
    return builder.build()
  }

  protected fun parseItemList(
    items: ReadableArray?,
    type: String = "row"
  ): ItemList {
    return ItemList.Builder().apply {
      for (i in 0 until items!!.size()) {
        if (type == "row") {
          addItem(parseRowItem(items.getMap(i), i))
        } else if (type == "grid") {
          addItem(parseGridItem(items.getMap(i), i))
        }
      }
    }.build();
  }

  protected fun parseRowItem(item: ReadableMap, index: Int): Row {
    val id = item.getString("id") ?: index.toString()
    return Row.Builder().apply {
      item.getString("text")?.let { setTitle(it) }
      item.getString("detailText")?.let { addText(it) }
      item.getMap("image")?.let { setImage(parseCarIcon(it)) }
      setOnClickListener {
        eventEmitter?.didSelectListItem(
          renderContext.screenMarker,
          id,
          index
        );
      }
    }.build()
  }

  protected fun parseGridItem(item: ReadableMap, index: Int): GridItem {
    val id = item.getString("id") ?: index.toString()
    return GridItem.Builder().apply {
      val titleVariants = item.getArray("titleVariants");
      if (titleVariants != null) {
        if (titleVariants.size() > 0) {
          setTitle(titleVariants.getString(0));
        }
        if (titleVariants.size() > 1) {
           setText(titleVariants.getString(1));
        }
      }
      item.getMap("image")?.let { setImage(parseCarIcon(it)) }
      setLoading(item.isLoading())
      setOnClickListener {
        eventEmitter?.gridButtonPressed(
          renderContext.screenMarker,
          id,
          index
        );
      }
    }.build();
  }

  private fun parsePlace(props: ReadableMap): Place {
    val builder = Place.Builder(
      CarLocation.create(
        props.getDouble("latitude"),
        props.getDouble("longitude"),
      )
    )
    PlaceMarker.Builder().apply {
      setIcon(parseCarIcon(props.getMap("icon")!!), PlaceMarker.TYPE_IMAGE)
      builder.setMarker(this.build())
    }

    return builder.build()
  }

  private fun parseMetadata(props: ReadableMap?): Metadata? {
    val type = props?.getString("type")
    if (props == null || type == null || type != "place") {
      Log.w(TAG, "parseMetaData: invalid type provided $type")
      return null
    }
    val builder = Metadata.Builder()
    builder.setPlace(parsePlace(props))

    return builder.build()
  }

  private fun getCarText(title: String, props: ReadableMap?): CarText {
    val spanBuilder = SpannableString(title)
    props?.let {
      try {
        val index = title.indexOf("%d")
        if (index != -1) {
          spanBuilder.setSpan(
            DistanceSpan.create(parseDistance(props)),
            index,
            index + 2,
            Spannable.SPAN_EXCLUSIVE_EXCLUSIVE,
          )
        }
        it
      } catch (e: Exception) {
        Log.w(TAG, "getCarText: failed to parse the CarText")
      }
    }
    return CarText.Builder(spanBuilder).build()
  }

  private fun getBitmapFromSource(map: ReadableMap): Bitmap {
    val source = ImageSource(context, map.getString("uri"))
    val imageRequest = ImageRequestBuilder.newBuilderWithSource(source.uri).build()
    val dataSource = Fresco.getImagePipeline().fetchDecodedImage(imageRequest, context)
    val result = DataSources.waitForFinalResult(dataSource) as CloseableReference<CloseableBitmap>
    val bitmap = result.get().underlyingBitmap

    CloseableReference.closeSafely(result)
    dataSource.close()

    return bitmap
  }

  protected fun buildRow(props: ReadableMap): Row {
    val builder = Row.Builder()
    builder.setTitle(
      getCarText(
        props.getString("title")!!,
        props.getMap("metadata")?.getMap("distance")
      )
    )
    props.getArray("texts")?.let {
      for (i in 0 until it.size()) {
        builder.addText(it.getString(i))
      }
    }
    props.getMap("image")?.let {
      builder.setImage(parseCarIcon(it))
    }
    try {
      val onPress = props.getInt("onPress")
      builder.setBrowsable(true)
      builder.setOnClickListener { invokeCallback(onPress) }
    } catch (e: Exception) {
      Log.w(TAG, "buildRow: failed to set clickListener on the row")
    }
    parseMetadata(props.getMap("metadata"))?.let {
      builder.setMetadata(it)
    }
    return builder.build()
  }

  protected fun parseDistance(map: ReadableMap): Distance {
    return Distance.create(map.getDouble("displayDistance"), map.getInt("displayUnit"))
  }

  companion object {
    const val TAG = "CarPlayTemplate"
  }
}
