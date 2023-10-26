package org.birkir.carplay;

import android.graphics.Bitmap;
import android.util.Log;

import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSources;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.imagepipeline.core.ImagePipeline;
import com.facebook.imagepipeline.image.CloseableBitmap;
import com.facebook.imagepipeline.image.CloseableImage;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.facebook.react.bridge.NoSuchKeyException;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.views.imagehelper.ImageSource;
import com.facebook.datasource.DataSource;

import androidx.annotation.NonNull;
import androidx.car.app.CarContext;
import androidx.car.app.model.SectionedItemList;
import androidx.car.app.model.ItemList;
import androidx.car.app.model.Item;
import androidx.car.app.model.CarIcon;
import androidx.car.app.model.Row;
import androidx.car.app.model.Template;
import androidx.car.app.model.ListTemplate;
import androidx.core.graphics.drawable.IconCompat;

import android.content.Context;

import java.util.ArrayList;
import java.util.List;

public class TemplateParser {
  private Context context;

  TemplateParser(Context reactContext) {
    context = reactContext;
  }

  public Template parseTemplate(ReadableMap config) {
    String type = config.getString("type");
    switch (type) {
      case "list":
        return parseListTemplate(config);
      default:
        return null;
    }
  }

  private ListTemplate parseListTemplate(ReadableMap config) {
    ListTemplate.Builder builder = new ListTemplate.Builder();

    // Handle title
    String title = config.getString("title");
    if (title != null) {
      builder.setTitle(title);
    }

    // Handle sections
    ReadableArray sections = config.getArray("sections");
    if (sections != null) {
      for (int i = 0; i < sections.size(); i++) {
        ReadableMap section = sections.getMap(i);
        builder.addSectionedList(
          SectionedItemList.create(
            parseItemList(section.getArray("items")),
            section.getString("header")
          )
        );
      }
    }

    // Handle loading
    boolean loading = config.getBoolean("loading");
    if (config.hasKey("loading")) {
      builder.setLoading(loading);
    }

    return builder.build();
  }

  private ItemList parseItemList(ReadableArray items) {
    ItemList.Builder builder = new ItemList.Builder();
    for (int i = 0; i < items.size(); i++) {
      builder.addItem(
        parseRowItem(items.getMap(i))
      );
    }
    return builder.build();
  }

  private CarIcon parseCarIcon(ReadableMap map) throws Throwable {
    String uri = map.getString("uri");
    ImageSource source = new ImageSource(context, uri);
    ImageRequest imageRequest = ImageRequestBuilder.newBuilderWithSource(source.getUri()).build();
    ImagePipeline imagePipeline = Fresco.getImagePipeline();
    DataSource<CloseableReference<CloseableImage>> dataSource = imagePipeline.fetchDecodedImage(imageRequest, context);
    CloseableReference<CloseableImage> result = DataSources.waitForFinalResult(dataSource);
    CloseableBitmap closeableBitmap = (CloseableBitmap) result.get();
    CarIcon carIcon = new CarIcon.Builder(IconCompat.createWithBitmap(closeableBitmap.getUnderlyingBitmap())).build();
    CloseableReference.closeSafely(result);
    dataSource.close();
    return carIcon;
  }

  private Item parseRowItem(ReadableMap item) {
    Row.Builder builder = new Row.Builder();
    String title = item.getString("title");
    String detailText = item.getString("detailText");
    ReadableMap image = item.getMap("image");
    boolean toggle = item.getBoolean("toggle");

    if (title != null) {
      builder.setTitle(title);
    }

    if (detailText != null) {
      builder.addText(detailText);
    }

    if (image != null) {
      try {
        CarIcon icon = parseCarIcon(image);
        builder.setImage(icon);
      } catch (Throwable e) {
        // Skipping the icon
      }
    }

    if (toggle) {
      // implement builder.setToggle()
      // also handle events
    }

    return builder.build();
  }


}
