# Class: NavigationSession

## Table of contents

### Constructors

- [constructor](/docs/NavigationSession.md#constructor)

### Properties

- [id](/docs/NavigationSession.md#id)
- [maneuvers](/docs/NavigationSession.md#maneuvers)
- [mapTemplate](/docs/NavigationSession.md#maptemplate)
- [trip](/docs/NavigationSession.md#trip)

### Methods

- [cancel](/docs/NavigationSession.md#cancel)
- [finish](/docs/NavigationSession.md#finish)
- [pause](/docs/NavigationSession.md#pause)
- [updateManeuvers](/docs/NavigationSession.md#updatemaneuvers)
- [updateTravelEstimates](/docs/NavigationSession.md#updatetravelestimates)

## Constructors

### constructor

• **new NavigationSession**(`id`, `trip`, `mapTemplate`): [`NavigationSession`](/docs/NavigationSession.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `trip` | [`Trip`](/docs/Trip.md) |
| `mapTemplate` | [`MapTemplate`](/docs/MapTemplate.md) |

#### Returns

[`NavigationSession`](/docs/NavigationSession.md)

#### Defined in

[packages/react-native-carplay/src/navigation/NavigationSession.ts:12](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/navigation/NavigationSession.ts#L12)

## Properties

### id

• **id**: `string`

#### Defined in

[packages/react-native-carplay/src/navigation/NavigationSession.ts:12](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/navigation/NavigationSession.ts#L12)

___

### maneuvers

• **maneuvers**: [`Maneuver`](/docs/Maneuver.md)[] = `[]`

#### Defined in

[packages/react-native-carplay/src/navigation/NavigationSession.ts:10](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/navigation/NavigationSession.ts#L10)

___

### mapTemplate

• **mapTemplate**: [`MapTemplate`](/docs/MapTemplate.md)

#### Defined in

[packages/react-native-carplay/src/navigation/NavigationSession.ts:12](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/navigation/NavigationSession.ts#L12)

___

### trip

• **trip**: [`Trip`](/docs/Trip.md)

#### Defined in

[packages/react-native-carplay/src/navigation/NavigationSession.ts:12](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/navigation/NavigationSession.ts#L12)

## Methods

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/navigation/NavigationSession.ts:46](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/navigation/NavigationSession.ts#L46)

___

### finish

▸ **finish**(): `void`

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/navigation/NavigationSession.ts:50](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/navigation/NavigationSession.ts#L50)

___

### pause

▸ **pause**(`reason`, `description?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | [`PauseReason`](/docs/PauseReason.md) |
| `description?` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/navigation/NavigationSession.ts:54](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/navigation/NavigationSession.ts#L54)

___

### updateManeuvers

▸ **updateManeuvers**(`maneuvers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maneuvers` | [`Maneuver`](/docs/Maneuver.md)[] |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/navigation/NavigationSession.ts:14](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/navigation/NavigationSession.ts#L14)

___

### updateTravelEstimates

▸ **updateTravelEstimates**(`maneuverIndex`, `travelEstimates`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maneuverIndex` | `number` |
| `travelEstimates` | [`TravelEstimates`](/docs/TravelEstimates.md) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/navigation/NavigationSession.ts:39](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/navigation/NavigationSession.ts#L39)
