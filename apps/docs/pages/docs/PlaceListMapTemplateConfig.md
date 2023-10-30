# Interface: PlaceListMapTemplateConfig

## Hierarchy

- `AndroidNavigationBaseTemplateConfig`

  ↳ **`PlaceListMapTemplateConfig`**

## Table of contents

### Properties

- [actions](/docs/PlaceListMapTemplateConfig.md#actions)
- [anchor](/docs/PlaceListMapTemplateConfig.md#anchor)
- [component](/docs/PlaceListMapTemplateConfig.md#component)
- [currentLocationEnabled](/docs/PlaceListMapTemplateConfig.md#currentlocationenabled)
- [headerAction](/docs/PlaceListMapTemplateConfig.md#headeraction)
- [id](/docs/PlaceListMapTemplateConfig.md#id)
- [itemList](/docs/PlaceListMapTemplateConfig.md#itemlist)
- [leadingNavigationBarButtons](/docs/PlaceListMapTemplateConfig.md#leadingnavigationbarbuttons)
- [loading](/docs/PlaceListMapTemplateConfig.md#loading)
- [tabImage](/docs/PlaceListMapTemplateConfig.md#tabimage)
- [tabSystemImageName](/docs/PlaceListMapTemplateConfig.md#tabsystemimagename)
- [tabSystemItem](/docs/PlaceListMapTemplateConfig.md#tabsystemitem)
- [tabTitle](/docs/PlaceListMapTemplateConfig.md#tabtitle)
- [title](/docs/PlaceListMapTemplateConfig.md#title)
- [trailingNavigationBarButtons](/docs/PlaceListMapTemplateConfig.md#trailingnavigationbarbuttons)

### Methods

- [onBarButtonPressed](/docs/PlaceListMapTemplateConfig.md#onbarbuttonpressed)
- [onDidAppear](/docs/PlaceListMapTemplateConfig.md#ondidappear)
- [onDidDisappear](/docs/PlaceListMapTemplateConfig.md#ondiddisappear)
- [onDidDismissPanningInterface](/docs/PlaceListMapTemplateConfig.md#ondiddismisspanninginterface)
- [onDidShowPanningInterface](/docs/PlaceListMapTemplateConfig.md#ondidshowpanninginterface)
- [onWillAppear](/docs/PlaceListMapTemplateConfig.md#onwillappear)
- [onWillDisappear](/docs/PlaceListMapTemplateConfig.md#onwilldisappear)

## Properties

### actions

• `Optional` **actions**: [`Action`](/docs/Action.md)<[`ActionType`](/docs/Exports.md#actiontype)\>[]

Sets an ActionStrip with a list of template-scoped actions for this template.
The Action buttons in Map Based Template are automatically adjusted based on the screen size. On narrow width screen, icon Actions show by default. If no icon specify, showing title Actions instead. On wider width screen, title Actions show by default. If no title specify, showing icon Actions instead.

**`Limit`**

This template allows up to 4 Actions in its ActionStrip. Of the 4 allowed Actions, it can either be a title Action as set via setTitle, or a icon Action as set via setIcon.

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts:15](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts#L15)

___

### anchor

• `Optional` **anchor**: [`Place`](/docs/Place.md)

Sets the anchor maker on the map.
An anchor marker will not be displayed unless set with this method.
The anchor marker is displayed differently from other markers by the host.
If not null, an anchor marker will be shown at the specified CarLocation on the map. The camera will adapt to always have the anchor marker visible within its viewport, along with other places' markers from Row that are currently visible in the Pane. This can be used to provide a reference point on the map (e.g. the center of a search region) as the user pages through the Pane's markers, for example.

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts:22](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts#L22)

___

### component

• **component**: `ComponentType`<`any`\>

Your component to render inside Android Auto Map view
Example `component: MyComponent`

#### Inherited from

AndroidNavigationBaseTemplateConfig.component

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:11](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L11)

___

### currentLocationEnabled

• `Optional` **currentLocationEnabled**: `boolean`

Sets whether to show the current location in the map.
The map template will show the user's current location on the map.
This functionality requires the app to have either the ACCESS_FINE_LOCATION or ACCESS_COARSE_LOCATION permission. When isEnabled is true, the host may receive location updates from the app in order to show the user's current location.

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts:28](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts#L28)

___

### headerAction

• `Optional` **headerAction**: [`HeaderAction`](/docs/Exports.md#headeraction)

Sets the Action that will be displayed in the header of the template.
Unless set with this method, the template will not have a header action.

**`Limit`**

This template only supports either one of APP_ICON and BACK as a header Action.

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts:34](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts#L34)

___

### id

• `Optional` **id**: `string`

Give the template your own ID. Must be unique.

#### Inherited from

AndroidNavigationBaseTemplateConfig.id

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:23](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L23)

___

### itemList

• `Optional` **itemList**: [`ListItem`](/docs/ListItem.md)[]

Sets an ItemList to show in a list view along with the map.
Unless set with this method, the template will not show an item list.
To show a marker corresponding to a point of interest represented by a row, set the Place instance via setMetadata. The host will display the PlaceMarker in both the map and the list view as the row becomes visible.

**`Limit`**

The number of items in the ItemList should be smaller or equal than the limit provided by CONTENT_LIMIT_TYPE_PLACE_LIST. The host will ignore any items over that limit. The list itself cannot be selectable as set via setOnSelectedListener. Each Row can add up to 2 lines of texts via addText and cannot contain a Toggle.

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts:41](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts#L41)

___

### leadingNavigationBarButtons

• `Optional` **leadingNavigationBarButtons**: [`BarButton`](/docs/Exports.md#barbutton)[]

An array of bar buttons to display on the leading side of the navigation bar.

The navigation bar displays up to two buttons in the leading space. When including more than two buttons in the array, the system displays only the first two buttons.
 iOS

#### Inherited from

AndroidNavigationBaseTemplateConfig.leadingNavigationBarButtons

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:30](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L30)

___

### loading

• `Optional` **loading**: `boolean`

Sets whether the template is in a loading state.

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts:45](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts#L45)

___

### tabImage

• `Optional` **tabImage**: `ImageSourcePropType`

Image source for tab

#### Inherited from

AndroidNavigationBaseTemplateConfig.tabImage

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:49](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L49)

___

### tabSystemImageName

• `Optional` **tabSystemImageName**: `string`

Name of system image for tab

#### Inherited from

AndroidNavigationBaseTemplateConfig.tabSystemImageName

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:45](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L45)

___

### tabSystemItem

• `Optional` **tabSystemItem**: `number`

UITabBarSystemItem

#### Inherited from

AndroidNavigationBaseTemplateConfig.tabSystemItem

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:41](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L41)

___

### tabTitle

• `Optional` **tabTitle**: `string`

Set tab title

#### Inherited from

AndroidNavigationBaseTemplateConfig.tabTitle

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:53](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L53)

___

### title

• `Optional` **title**: `string`

Title for the map

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts:49](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts#L49)

___

### trailingNavigationBarButtons

• `Optional` **trailingNavigationBarButtons**: [`BarButton`](/docs/Exports.md#barbutton)[]

An array of bar buttons to display on the trailing side of the navigation bar.

The navigation bar displays up to two buttons in the trailing space. When including more than two buttons in the array, the system displays only the first two buttons.
 iOS

#### Inherited from

AndroidNavigationBaseTemplateConfig.trailingNavigationBarButtons

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:37](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L37)

## Methods

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

AndroidNavigationBaseTemplateConfig.onBarButtonPressed

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

AndroidNavigationBaseTemplateConfig.onDidAppear

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:68](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L68)

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

AndroidNavigationBaseTemplateConfig.onDidDisappear

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:73](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L73)

___

### onDidDismissPanningInterface

▸ **onDidDismissPanningInterface**(): `void`

#### Returns

`void`

#### Inherited from

AndroidNavigationBaseTemplateConfig.onDidDismissPanningInterface

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:14](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L14)

___

### onDidShowPanningInterface

▸ **onDidShowPanningInterface**(): `void`

#### Returns

`void`

#### Inherited from

AndroidNavigationBaseTemplateConfig.onDidShowPanningInterface

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:13](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L13)

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

AndroidNavigationBaseTemplateConfig.onWillAppear

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

AndroidNavigationBaseTemplateConfig.onWillDisappear

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:63](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L63)
