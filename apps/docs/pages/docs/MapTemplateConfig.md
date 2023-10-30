# Interface: MapTemplateConfig

## Hierarchy

- [`TemplateConfig`](/docs/TemplateConfig.md)

  ↳ **`MapTemplateConfig`**

## Table of contents

### Properties

- [actions](/docs/MapTemplateConfig.md#actions)
- [automaticallyHidesNavigationBar](/docs/MapTemplateConfig.md#automaticallyhidesnavigationbar)
- [component](/docs/MapTemplateConfig.md#component)
- [guidanceBackgroundColor](/docs/MapTemplateConfig.md#guidancebackgroundcolor)
- [header](/docs/MapTemplateConfig.md#header)
- [hidesButtonsWithNavigationBar](/docs/MapTemplateConfig.md#hidesbuttonswithnavigationbar)
- [id](/docs/MapTemplateConfig.md#id)
- [items](/docs/MapTemplateConfig.md#items)
- [leadingNavigationBarButtons](/docs/MapTemplateConfig.md#leadingnavigationbarbuttons)
- [mapButtons](/docs/MapTemplateConfig.md#mapbuttons)
- [pane](/docs/MapTemplateConfig.md#pane)
- [tabImage](/docs/MapTemplateConfig.md#tabimage)
- [tabSystemImageName](/docs/MapTemplateConfig.md#tabsystemimagename)
- [tabSystemItem](/docs/MapTemplateConfig.md#tabsystemitem)
- [tabTitle](/docs/MapTemplateConfig.md#tabtitle)
- [trailingNavigationBarButtons](/docs/MapTemplateConfig.md#trailingnavigationbarbuttons)
- [tripEstimateStyle](/docs/MapTemplateConfig.md#tripestimatestyle)

### Methods

- [onAlertActionPressed](/docs/MapTemplateConfig.md#onalertactionpressed)
- [onBarButtonPressed](/docs/MapTemplateConfig.md#onbarbuttonpressed)
- [onDidAppear](/docs/MapTemplateConfig.md#ondidappear)
- [onDidCancelNavigation](/docs/MapTemplateConfig.md#ondidcancelnavigation)
- [onDidDisappear](/docs/MapTemplateConfig.md#ondiddisappear)
- [onMapButtonPressed](/docs/MapTemplateConfig.md#onmapbuttonpressed)
- [onPanBeganWithDirection](/docs/MapTemplateConfig.md#onpanbeganwithdirection)
- [onPanEndedWithDirection](/docs/MapTemplateConfig.md#onpanendedwithdirection)
- [onPanWithDirection](/docs/MapTemplateConfig.md#onpanwithdirection)
- [onSelectedPreviewForTrip](/docs/MapTemplateConfig.md#onselectedpreviewfortrip)
- [onStartedTrip](/docs/MapTemplateConfig.md#onstartedtrip)
- [onWillAppear](/docs/MapTemplateConfig.md#onwillappear)
- [onWillDisappear](/docs/MapTemplateConfig.md#onwilldisappear)

## Properties

### actions

• `Optional` **actions**: [`Action`](/docs/Action.md)<[`ActionType`](/docs/Exports.md#actiontype)\>[]

Sets the ActionStrip for this template.
Unless set with this method, the template will not have an action strip.
The Action buttons in Map Based Template are automatically adjusted based on the screen size. On narrow width screen, icon Actions show by default. If no icon specify, showing title Actions instead. On wider width screen, title Actions show by default. If no title specify, showing icon Actions instead.

**`Limit`**

This template allows up to 4 Actions in its ActionStrip. Of the 4 allowed Actions, it can either be a title Action as set via setTitle, or a icon Action as set via setIcon.
 Android

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:72](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L72)

___

### automaticallyHidesNavigationBar

• `Optional` **automaticallyHidesNavigationBar**: `boolean`

A Boolean value that indicates whether the navigation bar hides automatically.
 iOS

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:45](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L45)

___

### component

• **component**: `ComponentType`<`any`\>

Your component to render inside CarPlay/Android Auto
Example `component: MyComponent`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:33](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L33)

___

### guidanceBackgroundColor

• `Optional` **guidanceBackgroundColor**: `string`

The background color the map template uses when displaying guidance.
 iOS

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:21](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L21)

___

### header

• `Optional` **header**: [`Header`](/docs/Header.md)

A component that holds onto data associated with a template's header.
 Android

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:55](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L55)

___

### hidesButtonsWithNavigationBar

• `Optional` **hidesButtonsWithNavigationBar**: `boolean`

A Boolean value that tells the system to hide the map buttons when hiding the navigation bar.
 iOS

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:50](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L50)

___

### id

• `Optional` **id**: `string`

Give the template your own ID. Must be unique.

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[id](/docs/TemplateConfig.md#id)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:23](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L23)

___

### items

• `Optional` **items**: [`ListItem`](/docs/ListItem.md)[]

Sets an ItemList to show in a list view along with the map.
- To show a marker corresponding to a point of interest represented by a row, set the Place instance via setMetadata. The host will display the PlaceMarker in both the map and the list view as the row becomes visible.
- Images of type IMAGE_TYPE_LARGE are not allowed in this template.
- Rows are not allowed to have both an image and a place marker.

**`Limit`**

The number of items in the ItemList should be smaller or equal than the limit provided by CONTENT_LIMIT_TYPE_PLACE_LIST. The host will ignore any items over that limit. The list itself cannot be selectable as set via setOnSelectedListener. Each Row can add up to 2 lines of texts via addText and cannot contain a Toggle.
 Android

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:64](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L64)

___

### leadingNavigationBarButtons

• `Optional` **leadingNavigationBarButtons**: [`BarButton`](/docs/Exports.md#barbutton)[]

An array of bar buttons to display on the leading side of the navigation bar.

The navigation bar displays up to two buttons in the leading space. When including more than two buttons in the array, the system displays only the first two buttons.
 iOS

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[leadingNavigationBarButtons](/docs/TemplateConfig.md#leadingnavigationbarbuttons)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:30](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L30)

___

### mapButtons

• `Optional` **mapButtons**: [`MapButton`](/docs/MapButton.md)[]

An array of map buttons displayed on the trailing bottom corner of the map template.
If the array contains more than three buttons, the map template displays only the first three buttons, ignoring the remaining buttons.
 iOS
 Android

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:40](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L40)

___

### pane

• `Optional` **pane**: [`Pane`](/docs/Pane.md)

Sets the Pane for this template. getImage for pane will not be shown in MapTemplate.
Unless set with this method, the template will not show a pane.

**`Limit`**

The number of items in the Pane should be smaller or equal than the limit provided by CONTENT_LIMIT_TYPE_PANE. The host via addText and cannot contain either a Toggle or a OnClickListener.
Up to 2 Actions are allowed in the Pane. Each action's title color can be customized with ForegroundCarColorSpan instances. Any other span is not supported.
If none of the header Action, the header title or the action strip have been set on the template, the header is hidden.

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:80](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L80)

___

### tabImage

• `Optional` **tabImage**: `ImageSourcePropType`

Image source for tab

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[tabImage](/docs/TemplateConfig.md#tabimage)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:49](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L49)

___

### tabSystemImageName

• `Optional` **tabSystemImageName**: `string`

Name of system image for tab

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[tabSystemImageName](/docs/TemplateConfig.md#tabsystemimagename)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:45](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L45)

___

### tabSystemItem

• `Optional` **tabSystemItem**: `number`

UITabBarSystemItem

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[tabSystemItem](/docs/TemplateConfig.md#tabsystemitem)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:41](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L41)

___

### tabTitle

• `Optional` **tabTitle**: `string`

Set tab title

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[tabTitle](/docs/TemplateConfig.md#tabtitle)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:53](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L53)

___

### trailingNavigationBarButtons

• `Optional` **trailingNavigationBarButtons**: [`BarButton`](/docs/Exports.md#barbutton)[]

An array of bar buttons to display on the trailing side of the navigation bar.

The navigation bar displays up to two buttons in the trailing space. When including more than two buttons in the array, the system displays only the first two buttons.
 iOS

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[trailingNavigationBarButtons](/docs/TemplateConfig.md#trailingnavigationbarbuttons)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:37](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L37)

___

### tripEstimateStyle

• `Optional` **tripEstimateStyle**: ``"dark"`` \| ``"light"``

The style that the map template uses when displaying trip estimates during active nagivation.

**`Default`**

```ts
dark
@namespace iOS
```

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L27)

## Methods

### onAlertActionPressed

▸ **onAlertActionPressed**(`e`): `void`

Fired when Alert Action button is pressed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `Object` | Event |
| `e.primary?` | `boolean` | - |
| `e.secondary?` | `boolean` | - |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:85](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L85)

___

### onBarButtonPressed

▸ **onBarButtonPressed**(`e`): `void`

Fired when bar button is pressed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`BarButtonEvent`](/docs/BarButtonEvent.md) | Event |

#### Returns

`void`

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[onBarButtonPressed](/docs/TemplateConfig.md#onbarbuttonpressed)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:79](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L79)

___

### onDidAppear

▸ **onDidAppear**(`e`): `void`

Fired after template appears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`BaseEvent`](/docs/BaseEvent.md) | Event |

#### Returns

`void`

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[onDidAppear](/docs/TemplateConfig.md#ondidappear)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:68](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L68)

___

### onDidCancelNavigation

▸ **onDidCancelNavigation**(): `void`

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:91](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L91)

___

### onDidDisappear

▸ **onDidDisappear**(`e`): `void`

Fired after template disappears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`BaseEvent`](/docs/BaseEvent.md) | Event |

#### Returns

`void`

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[onDidDisappear](/docs/TemplateConfig.md#ondiddisappear)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:73](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L73)

___

### onMapButtonPressed

▸ **onMapButtonPressed**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Object` |
| `e.id` | `string` |
| `e.template` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:86](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L86)

___

### onPanBeganWithDirection

▸ **onPanBeganWithDirection**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Object` |
| `e.direction` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:88](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L88)

___

### onPanEndedWithDirection

▸ **onPanEndedWithDirection**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Object` |
| `e.direction` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:89](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L89)

___

### onPanWithDirection

▸ **onPanWithDirection**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Object` |
| `e.direction` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:87](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L87)

___

### onSelectedPreviewForTrip

▸ **onSelectedPreviewForTrip**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Object` |
| `e.routeIndex` | `number` |
| `e.tripId` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:90](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L90)

___

### onStartedTrip

▸ **onStartedTrip**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Object` |
| `e.routeIndex` | `number` |
| `e.tripId` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L92)

___

### onWillAppear

▸ **onWillAppear**(`e`): `void`

Fired before template appears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`BaseEvent`](/docs/BaseEvent.md) | Event |

#### Returns

`void`

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[onWillAppear](/docs/TemplateConfig.md#onwillappear)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:58](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L58)

___

### onWillDisappear

▸ **onWillDisappear**(`e`): `void`

Fired before template disappears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`BaseEvent`](/docs/BaseEvent.md) | Event |

#### Returns

`void`

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[onWillDisappear](/docs/TemplateConfig.md#onwilldisappear)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:63](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L63)
