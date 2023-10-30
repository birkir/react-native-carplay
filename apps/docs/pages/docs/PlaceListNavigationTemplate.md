# Class: PlaceListNavigationTemplate

A template that supports showing a list of places alongside a custom drawn map.
The template itself does not expose a drawing surface. In order to draw on the canvas, use setSurfaceCallback.
Template Restrictions In regards to template refreshes, as described in onGetTemplate, this template is considered a refresh of a previous one if:
- The previous template is in a loading state (see setLoading, or
- The template title has not changed, and the number of rows and the title (not counting spans) of each row between the previous and new ItemLists have not changed.
- The template is sent in response to a user-initiated content refresh request. (see setOnContentRefreshListener.
In order to use this template your car app MUST declare that it uses the **androidx.car.app.NAVIGATION_TEMPLATES** permission in the manifest.

## Hierarchy

- `AndroidNavigationBaseTemplate`<[`PlaceListNavigationTemplateConfig`](/docs/PlaceListNavigationTemplateConfig.md)\>

  ↳ **`PlaceListNavigationTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/PlaceListNavigationTemplate.md#constructor)

### Properties

- [config](/docs/PlaceListNavigationTemplate.md#config)
- [id](/docs/PlaceListNavigationTemplate.md#id)

### Accessors

- [eventMap](/docs/PlaceListNavigationTemplate.md#eventmap)
- [type](/docs/PlaceListNavigationTemplate.md#type)

### Methods

- [parseConfig](/docs/PlaceListNavigationTemplate.md#parseconfig)
- [updateTemplate](/docs/PlaceListNavigationTemplate.md#updatetemplate)

## Constructors

### constructor

• **new PlaceListNavigationTemplate**(`config`): [`PlaceListNavigationTemplate`](/docs/PlaceListNavigationTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`PlaceListNavigationTemplateConfig`](/docs/PlaceListNavigationTemplateConfig.md) |

#### Returns

[`PlaceListNavigationTemplate`](/docs/PlaceListNavigationTemplate.md)

#### Inherited from

AndroidNavigationBaseTemplate<PlaceListNavigationTemplateConfig\>.constructor

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L27)

## Properties

### config

• **config**: [`PlaceListNavigationTemplateConfig`](/docs/PlaceListNavigationTemplateConfig.md)

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

[packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts:54](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PlaceListNavigationTemplate.ts#L54)

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
