# Interface: NavigationTemplateConfig

## Hierarchy

- `AndroidNavigationBaseTemplateConfig`

  ↳ **`NavigationTemplateConfig`**

## Table of contents

### Properties

- [actions](/docs/NavigationTemplateConfig.md#actions)
- [backgroundColor](/docs/NavigationTemplateConfig.md#backgroundcolor)
- [component](/docs/NavigationTemplateConfig.md#component)
- [id](/docs/NavigationTemplateConfig.md#id)
- [leadingNavigationBarButtons](/docs/NavigationTemplateConfig.md#leadingnavigationbarbuttons)
- [mapButtons](/docs/NavigationTemplateConfig.md#mapbuttons)
- [navigationInfo](/docs/NavigationTemplateConfig.md#navigationinfo)
- [tabImage](/docs/NavigationTemplateConfig.md#tabimage)
- [tabSystemImageName](/docs/NavigationTemplateConfig.md#tabsystemimagename)
- [tabSystemItem](/docs/NavigationTemplateConfig.md#tabsystemitem)
- [tabTitle](/docs/NavigationTemplateConfig.md#tabtitle)
- [trailingNavigationBarButtons](/docs/NavigationTemplateConfig.md#trailingnavigationbarbuttons)
- [travelEstimate](/docs/NavigationTemplateConfig.md#travelestimate)

### Methods

- [onBarButtonPressed](/docs/NavigationTemplateConfig.md#onbarbuttonpressed)
- [onDidAppear](/docs/NavigationTemplateConfig.md#ondidappear)
- [onDidDisappear](/docs/NavigationTemplateConfig.md#ondiddisappear)
- [onDidDismissPanningInterface](/docs/NavigationTemplateConfig.md#ondiddismisspanninginterface)
- [onDidShowPanningInterface](/docs/NavigationTemplateConfig.md#ondidshowpanninginterface)
- [onWillAppear](/docs/NavigationTemplateConfig.md#onwillappear)
- [onWillDisappear](/docs/NavigationTemplateConfig.md#onwilldisappear)

## Properties

### actions

• **actions**: [`Action`](/docs/Action.md)<[`ActionType`](/docs/Exports.md#actiontype)\>[]

Sets an ActionStrip with a list of template-scoped actions for this template.
The Action buttons in Map Based Template are automatically adjusted based on the screen size. On narrow width screen, icon Actions show by default. If no icon specify, showing title Actions instead. On wider width screen, title Actions show by default. If no title specify, showing icon Actions instead.
Requirements This template allows up to 4 Actions in its ActionStrip. Of the 4 allowed Actions, it can either be a title Action as set via setTitle, or a icon Action as set via setIcon.

#### Defined in

[packages/react-native-carplay/src/templates/android/NavigationTemplate.ts:16](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/NavigationTemplate.ts#L16)

___

### backgroundColor

• `Optional` **backgroundColor**: [`CarColor`](/docs/Exports.md#carcolor)

Sets the background color to use for the navigation information.
Depending on contrast requirements, capabilities of the vehicle screens, or other factors, the color may be ignored by the host or overridden by the vehicle system.

#### Defined in

[packages/react-native-carplay/src/templates/android/NavigationTemplate.ts:21](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/NavigationTemplate.ts#L21)

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

### id

• `Optional` **id**: `string`

Give the template your own ID. Must be unique.

#### Inherited from

AndroidNavigationBaseTemplateConfig.id

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:23](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L23)

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

### mapButtons

• `Optional` **mapButtons**: [`Action`](/docs/Action.md)<[`ActionType`](/docs/Exports.md#actiontype)\>[]

Sets an ActionStrip with a list of map-control related actions for this template, such as pan or zoom.
The host will draw the buttons in an area that is associated with map controls.
If the app does not include the PAN button in this ActionStrip, the app will not receive the user input for panning gestures from SurfaceCallback methods, and the host will exit any previously activated pan mode.
Requirements This template allows up to 4 Actions in its map ActionStrip. Only Actions with icons set via setIcon are allowed.

#### Defined in

[packages/react-native-carplay/src/templates/android/NavigationTemplate.ts:32](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/NavigationTemplate.ts#L32)

___

### navigationInfo

• `Optional` **navigationInfo**: [`NavigationInfo`](/docs/Exports.md#navigationinfo)

Sets the navigation information to display on the template.
Unless set with this method, navigation info won't be displayed on the template.

#### Defined in

[packages/react-native-carplay/src/templates/android/NavigationTemplate.ts:37](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/NavigationTemplate.ts#L37)

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

### trailingNavigationBarButtons

• `Optional` **trailingNavigationBarButtons**: [`BarButton`](/docs/Exports.md#barbutton)[]

An array of bar buttons to display on the trailing side of the navigation bar.

The navigation bar displays up to two buttons in the trailing space. When including more than two buttons in the array, the system displays only the first two buttons.
 iOS

#### Inherited from

AndroidNavigationBaseTemplateConfig.trailingNavigationBarButtons

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:37](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L37)

___

### travelEstimate

• `Optional` **travelEstimate**: [`TravelEstimates`](/docs/TravelEstimates.md)

Sets the TravelEstimate to the final destination.

#### Defined in

[packages/react-native-carplay/src/templates/android/NavigationTemplate.ts:25](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/NavigationTemplate.ts#L25)

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
