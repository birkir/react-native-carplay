---
id: "MapTemplate"
title: "Class: MapTemplate"
sidebar_label: "MapTemplate"
sidebar_position: 0
custom_edit_url: null
---

The Map Template is a control layer that appears as an overlay over the base view and allows you to present user controls.

The control layer consists of a navigation bar and map buttons. By default, the navigation bar appears when the user interacts with the app, and disappears after a period of inactivity.

The navigation bar includes up to two leading buttons and two trailing buttons. You can customize the appearance of these buttons with icons or text.

The control layer may also include up to four map buttons. The map buttons are always shown as icons.

Navigation apps enter panning mode, zoom in or out, and perform other functions by responding to user actions on these buttons.

## Hierarchy

- `Template`<[`MapTemplateConfig`](../interfaces/MapTemplateConfig.md)\>

  ↳ **`MapTemplate`**

## Constructors

### constructor

• **new MapTemplate**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`MapTemplateConfig`](../interfaces/MapTemplateConfig.md) |

#### Overrides

Template&lt;MapTemplateConfig\&gt;.constructor

#### Defined in

templates/MapTemplate.ts:78

## Properties

### config

• **config**: [`MapTemplateConfig`](../interfaces/MapTemplateConfig.md)

#### Inherited from

Template.config

___

### id

• **id**: `string`

#### Inherited from

Template.id

#### Defined in

templates/Template.ts:92

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

templates/MapTemplate.ts:65

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

templates/MapTemplate.ts:61

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

templates/MapTemplate.ts:151

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

templates/MapTemplate.ts:173

___

### hideTripPreviews

▸ **hideTripPreviews**(): `void`

Hides the display of trip previews.

#### Returns

`void`

#### Defined in

templates/MapTemplate.ts:131

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

Template.parseConfig

#### Defined in

templates/Template.ts:137

___

### presentNavigationAlert

▸ **presentNavigationAlert**(`config`, `animated?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | `NavigationAlert` | `undefined` |
| `animated` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

templates/MapTemplate.ts:147

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

templates/MapTemplate.ts:163

___

### showRouteChoicesPreviewForTrip

▸ **showRouteChoicesPreviewForTrip**(`trip`, `textConfiguration?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trip` | [`Trip`](Trip.md) |
| `textConfiguration` | `TextConfiguration` |

#### Returns

`void`

#### Defined in

templates/MapTemplate.ts:143

___

### showTripPreviews

▸ **showTripPreviews**(`tripPreviews`, `textConfiguration?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tripPreviews` | [`Trip`](Trip.md)[] |
| `textConfiguration` | `TextConfiguration` |

#### Returns

`void`

#### Defined in

templates/MapTemplate.ts:135

___

### startNavigationSession

▸ **startNavigationSession**(`trip`): `Promise`<[`NavigationSession`](NavigationSession.md)\>

Begins guidance for a trip.

Keep a reference to the navigation session to perform guidance updates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trip` | [`Trip`](Trip.md) | Trip class instance |

#### Returns

`Promise`<[`NavigationSession`](NavigationSession.md)\>

#### Defined in

templates/MapTemplate.ts:97

___

### updateConfig

▸ **updateConfig**(`config`): `void`

Update MapTemplate configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`MapTemplateConfig`](../interfaces/MapTemplateConfig.md) |

#### Returns

`void`

#### Defined in

templates/MapTemplate.ts:120

___

### updateMapButtons

▸ **updateMapButtons**(`mapButtons`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapButtons` | `MapButton`[] |

#### Returns

`void`

#### Defined in

templates/MapTemplate.ts:124

___

### updateTravelEstimates

▸ **updateTravelEstimates**(`trip`, `travelEstimates`, `timeRemainingColor?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `trip` | [`Trip`](Trip.md) | `undefined` |
| `travelEstimates` | `TravelEstimates` | `undefined` |
| `timeRemainingColor` | `TimeRemainingColor` | `0` |

#### Returns

`void`

#### Defined in

templates/MapTemplate.ts:102
