package org.birkir.carplay.parser

import android.content.Context
import androidx.car.app.model.CarIcon
import androidx.car.app.model.Item
import androidx.car.app.model.ItemList
import androidx.car.app.model.ListTemplate
import androidx.car.app.model.Row
import androidx.car.app.model.SectionedItemList
import androidx.car.app.model.Template
import androidx.core.graphics.drawable.IconCompat
import com.facebook.common.references.CloseableReference
import com.facebook.datasource.DataSources
import com.facebook.drawee.backends.pipeline.Fresco
import com.facebook.imagepipeline.image.CloseableBitmap
import com.facebook.imagepipeline.request.ImageRequestBuilder
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.views.imagehelper.ImageSource

class TemplateParser internal constructor(private val context: Context) {
    fun parseTemplate(config: ReadableMap): Template? {
        val type = config.getString("type")
        return when (type) {
            "list" -> parseListTemplate(config)
            else -> null
        }
    }

    private fun parseListTemplate(config: ReadableMap): ListTemplate {
        val builder = ListTemplate.Builder()

        // Handle title
        val title = config.getString("title")
        if (title != null) {
            builder.setTitle(title)
        }

        // Handle sections
        val sections = config.getArray("sections")
        if (sections != null) {
            for (i in 0 until sections.size()) {
                val section = sections.getMap(i)
                builder.addSectionedList(
                        SectionedItemList.create(
                                parseItemList(section.getArray("items")),
                                section.getString("header")!!
                        )
                )
            }
        }

        // Handle loading
        val loading = config.getBoolean("loading")
        if (config.hasKey("loading")) {
            builder.setLoading(loading)
        }
        return builder.build()
    }

    private fun parseItemList(items: ReadableArray?): ItemList {
        val builder = ItemList.Builder()
        for (i in 0 until items!!.size()) {
            builder.addItem(
                    parseRowItem(items.getMap(i))
            )
        }
        return builder.build()
    }

    @Throws(Throwable::class)
    private fun parseCarIcon(map: ReadableMap): CarIcon {
        val uri = map.getString("uri")
        val source = ImageSource(context, uri)
        val imageRequest = ImageRequestBuilder.newBuilderWithSource(source.uri).build()
        val imagePipeline = Fresco.getImagePipeline()
        val dataSource = imagePipeline.fetchDecodedImage(imageRequest, context)
        val result = DataSources.waitForFinalResult(dataSource)!!
        val closeableBitmap = result.get() as CloseableBitmap
        val carIcon = CarIcon.Builder(IconCompat.createWithBitmap(closeableBitmap.underlyingBitmap)).build()
        CloseableReference.closeSafely(result)
        dataSource.close()
        return carIcon
    }

    private fun parseRowItem(item: ReadableMap): Item {
        val builder = Row.Builder()
        val title = item.getString("title")
        val detailText = item.getString("detailText")
        val image = item.getMap("image")
        val toggle = item.getBoolean("toggle")
        if (title != null) {
            builder.setTitle(title)
        }
        if (detailText != null) {
            builder.addText(detailText)
        }
        if (image != null) {
            try {
                val icon = parseCarIcon(image)
                builder.setImage(icon)
            } catch (e: Throwable) {
                // Skipping the icon
            }
        }
        if (toggle) {
            // implement builder.setToggle()
            // also handle events
        }
        return builder.build()
    }
}
