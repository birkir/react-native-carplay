# Class: PlaceListMapTemplate

A template that displays a map along with a list of places.
The map can display markers corresponding to the places in the list. See setItemList for details.
Template Restrictions In regards to template refreshes, as described in onGetTemplate, this template is considered a refresh of a previous one if:
- The previous template is in a loading state (see setLoading, or
- The template title has not changed, and the number of rows and the title (not counting spans) of each row between the previous and new ItemLists have not changed.
- The template is sent in response to a user-initiated content refresh request. (see setOnContentRefreshListener.

## Hierarchy

- `AndroidNavigationBaseTemplate`<[`PlaceListMapTemplateConfig`](/docs/PlaceListMapTemplateConfig.md)\>

  ↳ **`PlaceListMapTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/PlaceListMapTemplate.md#constructor)

### Properties

- [config](/docs/PlaceListMapTemplate.md#config)
- [id](/docs/PlaceListMapTemplate.md#id)

### Accessors

- [eventMap](/docs/PlaceListMapTemplate.md#eventmap)
- [type](/docs/PlaceListMapTemplate.md#type)

### Methods

- [parseConfig](/docs/PlaceListMapTemplate.md#parseconfig)
- [updateTemplate](/docs/PlaceListMapTemplate.md#updatetemplate)

## Constructors

### constructor

• **new PlaceListMapTemplate**(`config`): [`PlaceListMapTemplate`](/docs/PlaceListMapTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`PlaceListMapTemplateConfig`](/docs/PlaceListMapTemplateConfig.md) |

#### Returns

[`PlaceListMapTemplate`](/docs/PlaceListMapTemplate.md)

#### Inherited from

AndroidNavigationBaseTemplate<PlaceListMapTemplateConfig\>.constructor

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L27)

## Properties

### config

• **config**: [`PlaceListMapTemplateConfig`](/docs/PlaceListMapTemplateConfig.md)

#### Inherited from

AndroidNavigationBaseTemplate.config

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L27)

___

### id

• **id**: `string`

#### Inherited from

AndroidNavigationBaseTemplate.id

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:86](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L86)

## Accessors

### eventMap

• `get` **eventMap**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `didDismissPanningInterface` | `string` |
| `didShowPanningInterface` | `string` |

#### Inherited from

AndroidNavigationBaseTemplate.eventMap

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:20](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L20)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

AndroidNavigationBaseTemplate.type

#### Defined in

[packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts:61](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListMapTemplate.ts#L61)

## Methods

### parseConfig

▸ **parseConfig**(`config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`any`

#### Inherited from

AndroidNavigationBaseTemplate.parseConfig

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:147](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L147)

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

AndroidNavigationBaseTemplate.updateTemplate

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:141](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L141)
