# Class: PaneTemplate

## Hierarchy

- [`Template`](/docs/Template.md)<[`PaneTemplateConfig`](/docs/PaneTemplateConfig.md)\>

  ↳ **`PaneTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/PaneTemplate.md#constructor)

### Properties

- [config](/docs/PaneTemplate.md#config)
- [id](/docs/PaneTemplate.md#id)

### Accessors

- [eventMap](/docs/PaneTemplate.md#eventmap)
- [type](/docs/PaneTemplate.md#type)

### Methods

- [parseConfig](/docs/PaneTemplate.md#parseconfig)
- [updateTemplate](/docs/PaneTemplate.md#updatetemplate)

## Constructors

### constructor

• **new PaneTemplate**(`config`): [`PaneTemplate`](/docs/PaneTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TemplateConfig`](/docs/TemplateConfig.md) & [`PaneTemplateConfig`](/docs/PaneTemplateConfig.md) |

#### Returns

[`PaneTemplate`](/docs/PaneTemplate.md)

#### Inherited from

[Template](/docs/Template.md).[constructor](/docs/Template.md#constructor)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L92)

## Properties

### config

• **config**: [`TemplateConfig`](/docs/TemplateConfig.md) & [`PaneTemplateConfig`](/docs/PaneTemplateConfig.md)

#### Inherited from

[Template](/docs/Template.md).[config](/docs/Template.md#config)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L92)

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

#### Inherited from

Template.eventMap

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:88](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L88)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

[packages/react-native-carplay/src/templates/android/PaneTemplate.ts:13](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/PaneTemplate.ts#L13)

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

[Template](/docs/Template.md).[parseConfig](/docs/Template.md#parseconfig)

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

[Template](/docs/Template.md).[updateTemplate](/docs/Template.md#updatetemplate)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:141](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L141)
