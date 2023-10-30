# Interface: PlaceListNavigationTemplateConfig

## Hierarchy

- `AndroidNavigationBaseTemplateConfig`

  ↳ **`PlaceListNavigationTemplateConfig`**

## Table of contents

### Properties

- [actions](/docs/PlaceListNavigationTemplateConfig.md#actions)
- [component](/docs/PlaceListNavigationTemplateConfig.md#component)
- [header](/docs/PlaceListNavigationTemplateConfig.md#header)
- [id](/docs/PlaceListNavigationTemplateConfig.md#id)
- [itemList](/docs/PlaceListNavigationTemplateConfig.md#itemlist)
- [leadingNavigationBarButtons](/docs/PlaceListNavigationTemplateConfig.md#leadingnavigationbarbuttons)
- [loading](/docs/PlaceListNavigationTemplateConfig.md#loading)
- [mapButtons](/docs/PlaceListNavigationTemplateConfig.md#mapbuttons)
- [tabImage](/docs/PlaceListNavigationTemplateConfig.md#tabimage)
- [tabSystemImageName](/docs/PlaceListNavigationTemplateConfig.md#tabsystemimagename)
- [tabSystemItem](/docs/PlaceListNavigationTemplateConfig.md#tabsystemitem)
- [tabTitle](/docs/PlaceListNavigationTemplateConfig.md#tabtitle)
- [title](/docs/PlaceListNavigationTemplateConfig.md#title)
- [trailingNavigationBarButtons](/docs/PlaceListNavigationTemplateConfig.md#trailingnavigationbarbuttons)

### Methods

- [onBarButtonPressed](/docs/PlaceListNavigationTemplateConfig.md#onbarbuttonpressed)
- [onDidAppear](/docs/PlaceListNavigationTemplateConfig.md#ondidappear)
- [onDidDisappear](/docs/PlaceListNavigationTemplateConfig.md#ondiddisappear)
- [onDidDismissPanningInterface](/docs/PlaceListNavigationTemplateConfig.md#ondiddismisspanninginterface)
- [onDidShowPanningInterface](/docs/PlaceListNavigationTemplateConfig.md#ondidshowpanninginterface)
- [onWillAppear](/docs/PlaceListNavigationTemplateConfig.md#onwillappear)
- [onWillDisappear](/docs/PlaceListNavigationTemplateConfig.md#onwilldisappear)

## Properties

### actions

• `Optional` **actions**: [`Action`](/docs/Action.md)<[`ActionType`](/docs/Exports.md#actiontype)\>[]

Sets an ActionStrip with a list of template-scoped actions for this template.
The Action buttons in Map Based Template are automatically adjusted based on the screen size. On narrow width screen, icon Actions show by default. If no icon specify, showing title Actions instead. On wider width screen, title Actions show by default. If no title specify, showing icon Actions instead.

**`Limit`**

This template allows up to 4 Actions in its ActionStrip. Of the 4 allowed Actions, it can either be a title Action as set via setTitle, or a icon Action as set via setIcon.

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts:15](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts#L15)

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

### header

• `Optional` **header**: [`Header`](/docs/Header.md)

Sets the Header for this template.

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts:19](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts#L19)

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

[packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts:26](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts#L26)

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

[packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts:30](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts#L30)

___

### mapButtons

• `Optional` **mapButtons**: [`Action`](/docs/Action.md)<[`ActionType`](/docs/Exports.md#actiontype)\>[]

Sets an ActionStrip with a list of map-control related actions for this template, such as pan or zoom.
The host will draw the buttons in an area that is associated with map controls.
If the app does not include the PAN button in this ActionStrip, the app will not receive the user input for panning gestures from SurfaceCallback methods, and the host will exit any previously activated pan mode.

**`Limit`**

This template allows up to 4 Actions in its map ActionStrip. Only Actions with icons set via setIcon are allowed.

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts:37](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts#L37)

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

[packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts:41](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts#L41)

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
