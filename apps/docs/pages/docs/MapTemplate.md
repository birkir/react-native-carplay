# Class: MapTemplate

The Map Template is a control layer that appears as an overlay over the base view and allows you to present user controls.

The control layer consists of a navigation bar and map buttons. By default, the navigation bar appears when the user interacts with the app, and disappears after a period of inactivity.

The navigation bar includes up to two leading buttons and two trailing buttons. You can customize the appearance of these buttons with icons or text.

The control layer may also include up to four map buttons. The map buttons are always shown as icons.

Navigation apps enter panning mode, zoom in or out, and perform other functions by responding to user actions on these buttons.

## Hierarchy

- [`Template`](/docs/Template.md)<[`MapTemplateConfig`](/docs/MapTemplateConfig.md)\>

  ↳ **`MapTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/MapTemplate.md#constructor)

### Properties

- [config](/docs/MapTemplate.md#config)
- [id](/docs/MapTemplate.md#id)

### Accessors

- [eventMap](/docs/MapTemplate.md#eventmap)
- [type](/docs/MapTemplate.md#type)

### Methods

- [dismissNavigationAlert](/docs/MapTemplate.md#dismissnavigationalert)
- [dismissPanningInterface](/docs/MapTemplate.md#dismisspanninginterface)
- [hideTripPreviews](/docs/MapTemplate.md#hidetrippreviews)
- [parseConfig](/docs/MapTemplate.md#parseconfig)
- [presentNavigationAlert](/docs/MapTemplate.md#presentnavigationalert)
- [showPanningInterface](/docs/MapTemplate.md#showpanninginterface)
- [showRouteChoicesPreviewForTrip](/docs/MapTemplate.md#showroutechoicespreviewfortrip)
- [showTripPreviews](/docs/MapTemplate.md#showtrippreviews)
- [startNavigationSession](/docs/MapTemplate.md#startnavigationsession)
- [updateConfig](/docs/MapTemplate.md#updateconfig)
- [updateMapButtons](/docs/MapTemplate.md#updatemapbuttons)
- [updateTemplate](/docs/MapTemplate.md#updatetemplate)
- [updateTravelEstimates](/docs/MapTemplate.md#updatetravelestimates)

## Constructors

### constructor

• **new MapTemplate**(`config`): [`MapTemplate`](/docs/MapTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`MapTemplateConfig`](/docs/MapTemplateConfig.md) |

#### Returns

[`MapTemplate`](/docs/MapTemplate.md)

#### Overrides

[Template](/docs/Template.md).[constructor](/docs/Template.md#constructor)

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:124](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L124)

## Properties

### config

• **config**: [`MapTemplateConfig`](/docs/MapTemplateConfig.md)

#### Inherited from

[Template](/docs/Template.md).[config](/docs/Template.md#config)

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:124](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L124)

___

### id

• **id**: `string`

#### Inherited from

[Template](/docs/Template.md).[id](/docs/Template.md#id)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:86](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L86)

## Accessors

### eventMap

• `get` **eventMap**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `alertActionPressed` | `string` |
| `didCancelNavigation` | `string` |
| `mapButtonPressed` | `string` |
| `panBeganWithDirection` | `string` |
| `panEndedWithDirection` | `string` |
| `panWithDirection` | `string` |
| `selectedPreviewForTrip` | `string` |
| `startedTrip` | `string` |

#### Overrides

Template.eventMap

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:111](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L111)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:107](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L107)

## Methods

### dismissNavigationAlert

▸ **dismissNavigationAlert**(`animated?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `animated` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:206](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L206)

___

### dismissPanningInterface

▸ **dismissPanningInterface**(`animated?`): `void`

Dismisses the panning interface.

When dismissing the panning interface, the system shows the previously hidden map buttons.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animated` | `boolean` | `false` | A Boolean value that determines whether to animate the dismissal of the panning interface. |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:228](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L228)

___

### hideTripPreviews

▸ **hideTripPreviews**(): `void`

Hides the display of trip previews.

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:186](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L186)

___

### parseConfig

▸ **parseConfig**(`config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`any`

#### Inherited from

[Template](/docs/Template.md).[parseConfig](/docs/Template.md#parseconfig)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:147](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L147)

___

### presentNavigationAlert

▸ **presentNavigationAlert**(`config`, `animated?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | [`NavigationAlert`](/docs/NavigationAlert.md) | `undefined` |
| `animated` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:202](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L202)

___

### showPanningInterface

▸ **showPanningInterface**(`animated?`): `void`

Shows the panning interface over the map.

Calling this method while displaying the panning interface has no effect.

While showing the panning interface, the system hides all map buttons. The system doesn't provide a button to dismiss the panning interface. Instead, you must provide a map button in the navigation bar that the user taps to dismiss the panning interface.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animated` | `boolean` | `false` | A Boolean value that determines whether to animate the panning interface. |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:218](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L218)

___

### showRouteChoicesPreviewForTrip

▸ **showRouteChoicesPreviewForTrip**(`trip`, `textConfiguration?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trip` | [`Trip`](/docs/Trip.md) |
| `textConfiguration` | [`TextConfiguration`](/docs/TextConfiguration.md) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:198](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L198)

___

### showTripPreviews

▸ **showTripPreviews**(`tripPreviews`, `textConfiguration?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tripPreviews` | [`Trip`](/docs/Trip.md)[] |
| `textConfiguration` | [`TextConfiguration`](/docs/TextConfiguration.md) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:190](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L190)

___

### startNavigationSession

▸ **startNavigationSession**(`trip`): `Promise`<[`NavigationSession`](/docs/NavigationSession.md)\>

Begins guidance for a trip.

Keep a reference to the navigation session to perform guidance updates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trip` | [`Trip`](/docs/Trip.md) | Trip class instance |

#### Returns

`Promise`<[`NavigationSession`](/docs/NavigationSession.md)\>

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:150](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L150)

___

### updateConfig

▸ **updateConfig**(`config`): `void`

Update MapTemplate configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`MapTemplateConfig`](/docs/MapTemplateConfig.md) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:173](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L173)

___

### updateMapButtons

▸ **updateMapButtons**(`mapButtons`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapButtons` | [`MapButton`](/docs/MapButton.md)[] |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:178](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L178)

___

### updateTemplate

▸ **updateTemplate**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `P` |

#### Returns

`void`

#### Inherited from

[Template](/docs/Template.md).[updateTemplate](/docs/Template.md#updatetemplate)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:141](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L141)

___

### updateTravelEstimates

▸ **updateTravelEstimates**(`trip`, `travelEstimates`, `timeRemainingColor?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `trip` | [`Trip`](/docs/Trip.md) | `undefined` |
| `travelEstimates` | [`TravelEstimates`](/docs/TravelEstimates.md) | `undefined` |
| `timeRemainingColor` | [`TimeRemainingColor`](/docs/Exports.md#timeremainingcolor) | `0` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/MapTemplate.ts:155](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/MapTemplate.ts#L155)
