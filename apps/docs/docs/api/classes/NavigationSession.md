---
id: "NavigationSession"
title: "Class: NavigationSession"
sidebar_label: "NavigationSession"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new NavigationSession**(`id`, `trip`, `mapTemplate`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `trip` | [`Trip`](Trip.md) |
| `mapTemplate` | [`MapTemplate`](MapTemplate.md) |

#### Defined in

navigation/NavigationSession.ts:12

## Properties

### id

• **id**: `string`

___

### maneuvers

• **maneuvers**: `Maneuver`[]

#### Defined in

navigation/NavigationSession.ts:10

___

### mapTemplate

• **mapTemplate**: [`MapTemplate`](MapTemplate.md)

___

### trip

• **trip**: [`Trip`](Trip.md)

## Methods

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

navigation/NavigationSession.ts:41

___

### finish

▸ **finish**(): `void`

#### Returns

`void`

#### Defined in

navigation/NavigationSession.ts:45

___

### pause

▸ **pause**(`reason`, `description?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `PauseReason` |
| `description?` | `string` |

#### Returns

`void`

#### Defined in

navigation/NavigationSession.ts:49

___

### updateManeuvers

▸ **updateManeuvers**(`maneuvers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maneuvers` | `Maneuver`[] |

#### Returns

`void`

#### Defined in

navigation/NavigationSession.ts:14

___

### updateTravelEstimates

▸ **updateTravelEstimates**(`maneuverIndex`, `travelEstimates`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maneuverIndex` | `number` |
| `travelEstimates` | `TravelEstimates` |

#### Returns

`void`

#### Defined in

navigation/NavigationSession.ts:34
