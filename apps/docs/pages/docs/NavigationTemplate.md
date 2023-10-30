# Class: NavigationTemplate

A template for showing navigation information.
This template has two independent sections which can be updated:
- Navigation information such as routing instructions or navigation-related messages.
- Travel estimates to the destination.

## Hierarchy

- `AndroidNavigationBaseTemplate`<[`NavigationTemplateConfig`](/docs/NavigationTemplateConfig.md)\>

  ↳ **`NavigationTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/NavigationTemplate.md#constructor)

### Properties

- [config](/docs/NavigationTemplate.md#config)
- [id](/docs/NavigationTemplate.md#id)

### Accessors

- [eventMap](/docs/NavigationTemplate.md#eventmap)
- [type](/docs/NavigationTemplate.md#type)

### Methods

- [parseConfig](/docs/NavigationTemplate.md#parseconfig)
- [updateTemplate](/docs/NavigationTemplate.md#updatetemplate)

## Constructors

### constructor

• **new NavigationTemplate**(`config`): [`NavigationTemplate`](/docs/NavigationTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`NavigationTemplateConfig`](/docs/NavigationTemplateConfig.md) |

#### Returns

[`NavigationTemplate`](/docs/NavigationTemplate.md)

#### Inherited from

AndroidNavigationBaseTemplate<NavigationTemplateConfig\>.constructor

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L27)

## Properties

### config

• **config**: [`NavigationTemplateConfig`](/docs/NavigationTemplateConfig.md)

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

[packages/react-native-carplay/src/templates/android/NavigationTemplate.ts:47](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/NavigationTemplate.ts#L47)

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
