package org.birkir.carplay.parser

// import androidx.car.app.model.Template

import android.graphics.Bitmap
import android.text.Spannable
import android.text.SpannableString
import android.util.Log
import androidx.car.app.CarContext
import androidx.car.app.model.Action
import androidx.car.app.model.Action.FLAG_IS_PERSISTENT
import androidx.car.app.model.Action.FLAG_PRIMARY
import androidx.car.app.model.ActionStrip
import androidx.car.app.model.CarColor
import androidx.car.app.model.CarIcon
import androidx.car.app.model.CarLocation
import androidx.car.app.model.CarText
import androidx.car.app.model.DateTimeWithZone
import androidx.car.app.model.Distance
import androidx.car.app.model.DistanceSpan
import androidx.car.app.model.GridItem
import androidx.car.app.model.Header
import androidx.car.app.model.ItemList
import androidx.car.app.model.Metadata
import androidx.car.app.model.Pane
import androidx.car.app.model.Place
import androidx.car.app.model.PlaceMarker
import androidx.car.app.model.Row
import androidx.car.app.model.Template
import androidx.car.app.navigation.model.Lane
import androidx.car.app.navigation.model.LaneDirection
import androidx.car.app.navigation.model.Maneuver
import androidx.car.app.navigation.model.MessageInfo
import androidx.car.app.navigation.model.NavigationTemplate
import androidx.car.app.navigation.model.RoutingInfo
import androidx.car.app.navigation.model.Step
import androidx.car.app.navigation.model.TravelEstimate
import androidx.core.graphics.drawable.IconCompat
import com.facebook.common.references.CloseableReference
import com.facebook.datasource.DataSource
import com.facebook.datasource.DataSources
import com.facebook.drawee.backends.pipeline.Fresco
import com.facebook.imagepipeline.image.CloseableBitmap
import com.facebook.imagepipeline.image.CloseableImage
import com.facebook.imagepipeline.request.ImageRequestBuilder
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.views.imagehelper.ImageSource
import org.birkir.carplay.screens.CarScreenContext
import org.birkir.carplay.utils.EventEmitter
import java.util.TimeZone


/**
 * Base class for parsing the template based on the props passed from ReactNative
 *
 * @property context
 * @property carScreenContext
 */
abstract class RCTTemplate(
  protected val context: CarContext,
  protected val carScreenContext: CarScreenContext
) {

  abstract fun parse(props: ReadableMap): Template

  protected val eventEmitter: EventEmitter
    get() = carScreenContext.eventEmitter

  fun parseCarIcon(map: ReadableMap): CarIcon {
    val source = ImageSource(context, map.getString("uri"))
    val imageRequest = ImageRequestBuilder.newBuilderWithSource(source.uri).build()
    val dataSource = Fresco.getImagePipeline().fetchDecodedImage(imageRequest, context)
    val result = DataSources.waitForFinalResult(dataSource) as CloseableReference<CloseableBitmap>
    val bitmap = result.get().underlyingBitmap

    CloseableReference.closeSafely(result)
    dataSource.close()

    return CarIcon.Builder(IconCompat.createWithBitmap(bitmap)).build()
  }

  fun parseColor(colorName: String?): CarColor {
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

  fun parseAction(map: ReadableMap?): Action {
    val type = map?.getString("type")
    if (type == "appIcon") {
      return Action.APP_ICON
    } else if (type == "back") {
      return Action.BACK
    } else if (type == "pan") {
      return Action.PAN
    }
    val id = map?.getString("id")
    val builder = Action.Builder()
    if (map != null) {
      map.getString("title")?.let {
        builder.setTitle(it)
      }
      map.getMap("icon")?.let {
        builder.setIcon(parseCarIcon(it))
      }
      map.getString("visibility")?.let {
        if (it == "primary") {
          builder.setFlags(FLAG_PRIMARY)
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
          eventEmitter.buttonPressed(id)
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
    }.build()
  }

  protected fun parseRowItem(item: ReadableMap, index: Int): Row {
    val id = item.getString("id") ?: index.toString()
    return Row.Builder().apply {
      item.getString("text")?.let { setTitle(it) }
      item.getString("detailText")?.let { addText(it) }
      item.getMap("image")?.let { setImage(parseCarIcon(it)) }
      if (item.hasKey("browsable") && item.getBoolean("browsable")) {
        setOnClickListener {
          eventEmitter.didSelectListItem(
            id,
            index
          )
        }
      }
    }.build()
  }

  protected fun parseGridItem(item: ReadableMap, index: Int): GridItem {
    val id = item.getString("id") ?: index.toString()
    return GridItem.Builder().apply {
      val titleVariants = item.getArray("titleVariants")
      val metadata = item.getMap("metadata");

      if (titleVariants != null) {
        if (titleVariants.size() > 0) {
          setTitle(parseCarText(
            titleVariants.getString(0),
            metadata
          ))
        }
        if (titleVariants.size() > 1) {
          setText(titleVariants.getString(1))
        }
      }
      item.getMap("image")?.let { setImage(parseCarIcon(it)) }
      setLoading(item.isLoading())
      setOnClickListener {
        eventEmitter.gridButtonPressed(id, index)
      }
    }.build()
  }

  fun parsePlace(props: ReadableMap): Place {
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

  fun parseMetadata(props: ReadableMap?): Metadata? {
    val type = props?.getString("type")
    if (props == null || type == null || type != "place") {
      Log.w(TAG, "parseMetaData: invalid type provided $type")
      return null
    }
    return Metadata.Builder().setPlace(parsePlace(props)).build()
  }

  fun parseCarText(title: String, props: ReadableMap?): CarText {
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

  protected fun buildRow(props: ReadableMap): Row {
    val builder = Row.Builder()
    builder.setTitle(
      parseCarText(
        props.getString("title")!!,
        props.getMap("metadata")
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
//      builder.setOnClickListener { invokeCallback(onPress) }
    } catch (e: Exception) {
      Log.w(TAG, "buildRow: failed to set clickListener on the row")
    }
    parseMetadata(props.getMap("metadata"))?.let {
      builder.setMetadata(it)
    }
    return builder.build()
  }

  protected fun parseDistanceUnit(value: String?): Int {
    return when (value) {
      "meters" -> Distance.UNIT_METERS
      "miles" -> Distance.UNIT_MILES
      "kilometers" -> Distance.UNIT_KILOMETERS
      "yards" -> Distance.UNIT_YARDS
      "feet" -> Distance.UNIT_FEET
      else -> Distance.UNIT_METERS
    }
  }

  protected fun parseDistance(map: ReadableMap): Distance {
    return Distance.create(map.getDouble("distance"), parseDistanceUnit(map.getString("distanceUnits")))
  }

  protected fun parsePane(item: ReadableMap): Pane {
    return Pane.Builder().apply {
      setLoading(item.isLoading())
      item.getMap("image")?.let {
        setImage(parseCarIcon(it))
      }
      item.getArray("actions")?.let {
        for (i in 0 until it.size()) {
          addAction(parseAction(it.getMap(i)))
        }
      }
      item.getArray("items")?.let {
        for (i in 0 until it.size()) {
          addRow(parseRowItem(it.getMap(i), i))
        }
      }
    }.build()
  }

  protected fun parseHeader(map: ReadableMap): Header {
    return Header.Builder().apply {
      map.getString("title")?.let { setTitle(parseCarText(it, map)) }
      map.getMap("startAction")?.let { setStartHeaderAction(parseAction(it)) }
      map.getArray("endActions")?.let {
        for (i in 0 until it.size()) {
          addEndHeaderAction(parseAction(it.getMap(i)))
        }
      }
    }.build()
  }

  protected fun parseStep(map: ReadableMap): Step {
    return Step.Builder().apply {
      map.getMap("lane")?.let { addLane(parseLane(it)) }
      map.getString("cue")?.let { setCue(it) }
      map.getMap("lanesImage")?.let { setLanesImage(parseCarIcon(it)) }
      map.getMap("maneuver")?.let { setManeuver(parseManeuver(it)) }
      map.getString("road")?.let { setRoad(it) }
    }.build()
  }

  protected fun parseLane(map: ReadableMap): Lane {
    val laneBuilder = Lane.Builder()
    val shape = map.getInt("shape")
    val recommended = map.getBoolean("recommended")
    return laneBuilder.addDirection(LaneDirection.create(shape, recommended)).build()
  }

  protected fun parseManeuver(map: ReadableMap): Maneuver {
    val type = map.getInt("type")
    val builder = Maneuver.Builder(type)
    builder.setIcon(parseCarIcon(map.getMap("icon")!!))
    if (type == Maneuver.TYPE_ROUNDABOUT_ENTER_AND_EXIT_CW_WITH_ANGLE
      || type == Maneuver.TYPE_ROUNDABOUT_ENTER_AND_EXIT_CCW_WITH_ANGLE
    ) {
      builder.setRoundaboutExitAngle(map.getInt("roundaboutExitAngle"))
    }

    if (type == Maneuver.TYPE_ROUNDABOUT_ENTER_AND_EXIT_CW
      || type == Maneuver.TYPE_ROUNDABOUT_ENTER_AND_EXIT_CCW
      || type == Maneuver.TYPE_ROUNDABOUT_ENTER_AND_EXIT_CW_WITH_ANGLE
      || type == Maneuver.TYPE_ROUNDABOUT_ENTER_AND_EXIT_CCW_WITH_ANGLE
    ) {
      builder.setRoundaboutExitNumber(map.getInt("roundaboutExitNumber"))
    }

    return builder.build()
  }

  protected fun parseMessageInfo(map: ReadableMap): MessageInfo {
    val builder = MessageInfo.Builder(map.getString("title")!!)
    map.getMap("icon")?.let { builder.setImage(parseCarIcon(it)) }
    return builder.build()
  }

  protected fun parseTravelEstimate(map: ReadableMap): TravelEstimate {
    val dateTimeMap = map.getMap("destinationTime")!!
    val destinationDateTime = DateTimeWithZone.create(
      dateTimeMap.getDouble("timeSinceEpochMillis").toLong(),
      TimeZone.getTimeZone(dateTimeMap.getString("id")),
    )
    val builder = TravelEstimate.Builder(
      Distance.create(
        map.getDouble("distanceRemaining"),
        parseDistanceUnit(map.getString("distanceUnits"))
      ),
      destinationDateTime,
    )
    map.getString("distanceRemainingColor")?.let {
      builder.setRemainingDistanceColor(parseColor(it))
    }
    map.getString("timeRemainingColor")?.let {
      builder.setRemainingTimeColor(parseColor(it))
    }
    builder.setRemainingTimeSeconds(map.getDouble("timeRemaining").toLong())
    return builder.build()
  }

  protected fun parseRoutingInfo(map: ReadableMap): RoutingInfo {
    return RoutingInfo.Builder()
      .apply {
        setLoading(map.isLoading())
        setCurrentStep(
          parseStep(map.getMap("step")!!),
          parseDistance(map)
        )
        map.getMap("junctionImage")?.let { setJunctionImage(parseCarIcon(it)) }
        map.getMap("nextStep")?.let { setNextStep(parseStep(it)) }
      }.build()
  }

  protected fun parseNavigationInfo(map: ReadableMap): NavigationTemplate.NavigationInfo {
    val type = map.getString("type")
    return if (type == "routingInfo") {
      parseRoutingInfo(map.getMap("info")!!)
    } else {
      parseMessageInfo(map.getMap("info")!!)
    }
  }

  companion object {
    const val TAG = "RNCarPlayTemplate"
  }
}
