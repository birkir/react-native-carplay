# Android Auto

## Installing

Create a new file under android/app/src/main/res/xml/automotive_app_desc.xml with the following content:

```xml
<?xml version="1.0" encoding="utf-8"?>
<automotiveApp>
  <uses name="template" />
</automotiveApp>
```

Under android/app/src/main/AndroidManifest.xml add the following:

```xml
<meta-data
  android:name="com.google.android.gms.car.application"
  android:resource="@xml/automotive_app_desc" />
```

**The good**: We got a lot of stuff working. Lots of the templates crosses over from CarPlay. AA has nice things like "Toasts".

**The bad**: HMR does not work. Messaging between Host and App yet to figure out. Memory concerns?

## Permissions

The following permissions are needed for some parts of the library to work.

### androidx.car.app.ACCESS_SURFACE

Permission that apps can use to get access to a canvas surface.

### androidx.car.app.MAP_TEMPLATES

Permission that apps can use to get access to templates that show a map such as androidx.car.app.model.PlaceListMapTemplate.

### androidx.car.app.NAVIGATION_TEMPLATES

Permission that apps can use to get access to the navigation templates of the car app library.

## Category matrix

Three app categories are supported:

- androidx.car.app.category.NAVIGATION
- androidx.car.app.category.POI
- androidx.car.app.category.IOT

<table>
<thead>
<tr>
<th></th>
<th>NAVIGATION</th>
<th>POI</th>
<th>IOT</th>
</tr>
</thead>
<tr><tbody>
<tr><td>Tab</td><td> </td><td>✅</td><td>✅</td><tr></
<tr><td>List</td><td>✅</td><td>✅</td><td>✅</td><tr></tr>
<td>Grid</td><td>✅</td><td>✅</td><td>✅</td><tr></tr>
<td>Message</td><td>✅</td><td>✅</td><td>✅</td><tr></tr>
<td>Pane</td><td>✅</td><td>✅</td><td>✅</td><tr></tr>
<td>Search</td><td>✅</td><td>✅</td><td>✅</td></tr>
<td>Map</td><td>✅</td><td>✅</td><td>✅</td><tr></tr>
<tr><td>PlaceListMap</td><td> </td><td>✅</td><td>✅</td></tr>
<tr><td>Navigation</td><td>✅</td><td></td><td></td></tr>
<tr><td>PlaceListNavigation</td><td>✅</td><td></td><td></td></tr>
<tr><td>RoutePreviewNavigation</td><td>✅</td><td></td><td></td></tr>
</tbody>
</table>

## Yet to be completed

- [ ] TabTemplate
- [ ] SignInTemplate
- [ ] MapWithContentTemplate
