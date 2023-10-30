# Interface: InternalCarPlay

## Hierarchy

- `NativeModule`

  ↳ **`InternalCarPlay`**

## Table of contents

### Properties

- [addListener](/docs/InternalCarPlay.md#addlistener)
- [removeListeners](/docs/InternalCarPlay.md#removelisteners)

### Methods

- [activateVoiceControlState](/docs/InternalCarPlay.md#activatevoicecontrolstate)
- [alert](/docs/InternalCarPlay.md#alert)
- [cancelNavigationSession](/docs/InternalCarPlay.md#cancelnavigationsession)
- [checkForConnection](/docs/InternalCarPlay.md#checkforconnection)
- [createTemplate](/docs/InternalCarPlay.md#createtemplate)
- [createTrip](/docs/InternalCarPlay.md#createtrip)
- [dismissNavigationAlert](/docs/InternalCarPlay.md#dismissnavigationalert)
- [dismissPanningInterface](/docs/InternalCarPlay.md#dismisspanninginterface)
- [dismissTemplate](/docs/InternalCarPlay.md#dismisstemplate)
- [enableNowPlaying](/docs/InternalCarPlay.md#enablenowplaying)
- [finishNavigationSession](/docs/InternalCarPlay.md#finishnavigationsession)
- [getMaximumListItemCount](/docs/InternalCarPlay.md#getmaximumlistitemcount)
- [getMaximumListSectionCount](/docs/InternalCarPlay.md#getmaximumlistsectioncount)
- [hideTripPreviews](/docs/InternalCarPlay.md#hidetrippreviews)
- [invalidate](/docs/InternalCarPlay.md#invalidate)
- [pauseNavigationSession](/docs/InternalCarPlay.md#pausenavigationsession)
- [popTemplate](/docs/InternalCarPlay.md#poptemplate)
- [popToRootTemplate](/docs/InternalCarPlay.md#poptoroottemplate)
- [popToTemplate](/docs/InternalCarPlay.md#poptotemplate)
- [presentNavigationAlert](/docs/InternalCarPlay.md#presentnavigationalert)
- [presentTemplate](/docs/InternalCarPlay.md#presenttemplate)
- [pushTemplate](/docs/InternalCarPlay.md#pushtemplate)
- [reactToSelectedResult](/docs/InternalCarPlay.md#reacttoselectedresult)
- [reactToUpdatedSearchText](/docs/InternalCarPlay.md#reacttoupdatedsearchtext)
- [reload](/docs/InternalCarPlay.md#reload)
- [setRootTemplate](/docs/InternalCarPlay.md#setroottemplate)
- [showPanningInterface](/docs/InternalCarPlay.md#showpanninginterface)
- [showRouteChoicesPreviewForTrip](/docs/InternalCarPlay.md#showroutechoicespreviewfortrip)
- [showTripPreviews](/docs/InternalCarPlay.md#showtrippreviews)
- [startNavigationSession](/docs/InternalCarPlay.md#startnavigationsession)
- [toast](/docs/InternalCarPlay.md#toast)
- [updateInformationTemplateActions](/docs/InternalCarPlay.md#updateinformationtemplateactions)
- [updateInformationTemplateItems](/docs/InternalCarPlay.md#updateinformationtemplateitems)
- [updateListTemplateItem](/docs/InternalCarPlay.md#updatelisttemplateitem)
- [updateListTemplateSections](/docs/InternalCarPlay.md#updatelisttemplatesections)
- [updateManeuversNavigationSession](/docs/InternalCarPlay.md#updatemaneuversnavigationsession)
- [updateMapTemplateConfig](/docs/InternalCarPlay.md#updatemaptemplateconfig)
- [updateMapTemplateMapButtons](/docs/InternalCarPlay.md#updatemaptemplatemapbuttons)
- [updateTabBarTemplates](/docs/InternalCarPlay.md#updatetabbartemplates)
- [updateTemplate](/docs/InternalCarPlay.md#updatetemplate)
- [updateTravelEstimatesForTrip](/docs/InternalCarPlay.md#updatetravelestimatesfortrip)
- [updateTravelEstimatesNavigationSession](/docs/InternalCarPlay.md#updatetravelestimatesnavigationsession)

## Properties

### addListener

• **addListener**: (`eventType`: `string`) => `void`

#### Type declaration

▸ (`eventType`): `void`

Add the provided eventType as an active listener

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventType` | `string` | name of the event for which we are registering listener |

##### Returns

`void`

#### Inherited from

NativeModule.addListener

#### Defined in

node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter.d.ts:24

___

### removeListeners

• **removeListeners**: (`count`: `number`) => `void`

#### Type declaration

▸ (`count`): `void`

Remove a specified number of events.  There are no eventTypes in this case, as
the native side doesn't remove the name, but only manages a counter of total
listeners

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | number of listeners to remove (of any type) |

##### Returns

`void`

#### Inherited from

NativeModule.removeListeners

#### Defined in

node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter.d.ts:32

## Methods

### activateVoiceControlState

▸ **activateVoiceControlState**(`id`, `identifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `identifier` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:80](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L80)

___

### alert

▸ **alert**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.actions?` | [`Action`](/docs/Action.md)<[`ActionType`](/docs/Exports.md#actiontype)\>[] |
| `config.duration` | `number` |
| `config.icon?` | `ImageSourcePropType` |
| `config.id` | `number` |
| `config.subtitle?` | `string` |
| `config.title` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:84](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L84)

___

### cancelNavigationSession

▸ **cancelNavigationSession**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:42](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L42)

___

### checkForConnection

▸ **checkForConnection**(): `void`

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L27)

___

### createTemplate

▸ **createTemplate**(`id`, `config`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `unknown` |
| `callback?` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:48](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L48)

___

### createTrip

▸ **createTrip**(`id`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | [`TripConfig`](/docs/TripConfig.md) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:45](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L45)

___

### dismissNavigationAlert

▸ **dismissNavigationAlert**(`id`, `animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:70](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L70)

___

### dismissPanningInterface

▸ **dismissPanningInterface**(`id`, `animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:72](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L72)

___

### dismissTemplate

▸ **dismissTemplate**(`animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:34](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L34)

___

### enableNowPlaying

▸ **enableNowPlaying**(`enabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:35](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L35)

___

### finishNavigationSession

▸ **finishNavigationSession**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:43](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L43)

___

### getMaximumListItemCount

▸ **getMaximumListItemCount**(`id`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:74](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L74)

___

### getMaximumListSectionCount

▸ **getMaximumListSectionCount**(`id`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:73](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L73)

___

### hideTripPreviews

▸ **hideTripPreviews**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:66](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L66)

___

### invalidate

▸ **invalidate**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:50](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L50)

___

### pauseNavigationSession

▸ **pauseNavigationSession**(`id`, `reason`, `description?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `reason` | [`PauseReason`](/docs/PauseReason.md) |
| `description?` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:44](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L44)

___

### popTemplate

▸ **popTemplate**(`animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:32](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L32)

___

### popToRootTemplate

▸ **popToRootTemplate**(`animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:31](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L31)

___

### popToTemplate

▸ **popToTemplate**(`templateId`, `animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `templateId` | `string` |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:30](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L30)

___

### presentNavigationAlert

▸ **presentNavigationAlert**(`id`, `config`, `animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `unknown` |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:69](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L69)

___

### presentTemplate

▸ **presentTemplate**(`templateId`, `animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `templateId` | `string` |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:33](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L33)

___

### pushTemplate

▸ **pushTemplate**(`templateId`, `animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `templateId` | `string` |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:29](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L29)

___

### reactToSelectedResult

▸ **reactToSelectedResult**(`status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:75](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L75)

___

### reactToUpdatedSearchText

▸ **reactToUpdatedSearchText**(`items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:78](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L78)

___

### reload

▸ **reload**(): `void`

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:82](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L82)

___

### setRootTemplate

▸ **setRootTemplate**(`templateId`, `animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `templateId` | `string` |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:28](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L28)

___

### showPanningInterface

▸ **showPanningInterface**(`id`, `animated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `animated` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:71](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L71)

___

### showRouteChoicesPreviewForTrip

▸ **showRouteChoicesPreviewForTrip**(`id`, `tripId`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `tripId` | `string` |
| `config` | [`TextConfiguration`](/docs/TextConfiguration.md) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:68](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L68)

___

### showTripPreviews

▸ **showTripPreviews**(`id`, `previews`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `previews` | `string`[] |
| `config` | [`TextConfiguration`](/docs/TextConfiguration.md) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:67](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L67)

___

### startNavigationSession

▸ **startNavigationSession**(`id`, `tripId`): `Promise`<{ `navigationSessionId`: `string` ; `tripId`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `tripId` | `string` |

#### Returns

`Promise`<{ `navigationSessionId`: `string` ; `tripId`: `string`  }\>

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:51](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L51)

___

### toast

▸ **toast**(`message`, `duration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:83](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L83)

___

### updateInformationTemplateActions

▸ **updateInformationTemplateActions**(`id`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:47](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L47)

___

### updateInformationTemplateItems

▸ **updateInformationTemplateItems**(`id`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:46](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L46)

___

### updateListTemplateItem

▸ **updateListTemplateItem**(`id`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:77](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L77)

___

### updateListTemplateSections

▸ **updateListTemplateSections**(`id`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:76](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L76)

___

### updateManeuversNavigationSession

▸ **updateManeuversNavigationSession**(`id`, `x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `x` | [`Maneuver`](/docs/Maneuver.md)[] |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:36](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L36)

___

### updateMapTemplateConfig

▸ **updateMapTemplateConfig**(`id`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:64](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L64)

___

### updateMapTemplateMapButtons

▸ **updateMapTemplateMapButtons**(`id`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:65](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L65)

___

### updateTabBarTemplates

▸ **updateTabBarTemplates**(`id`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:79](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L79)

___

### updateTemplate

▸ **updateTemplate**(`id`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `config` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:49](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L49)

___

### updateTravelEstimatesForTrip

▸ **updateTravelEstimatesForTrip**(`id`, `tripId`, `travelEstimates`, `timeRemainingColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `tripId` | `string` |
| `travelEstimates` | [`TravelEstimates`](/docs/TravelEstimates.md) |
| `timeRemainingColor` | [`TimeRemainingColor`](/docs/Exports.md#timeremainingcolor) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:58](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L58)

___

### updateTravelEstimatesNavigationSession

▸ **updateTravelEstimatesNavigationSession**(`id`, `index`, `estimates`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `index` | `number` |
| `estimates` | [`TravelEstimates`](/docs/TravelEstimates.md) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:37](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L37)
