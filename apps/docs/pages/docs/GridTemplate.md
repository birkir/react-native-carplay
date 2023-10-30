# Class: GridTemplate

## Hierarchy

- [`Template`](/docs/Template.md)<[`GridTemplateConfig`](/docs/GridTemplateConfig.md)\>

  ↳ **`GridTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/GridTemplate.md#constructor)

### Properties

- [config](/docs/GridTemplate.md#config)
- [id](/docs/GridTemplate.md#id)

### Accessors

- [eventMap](/docs/GridTemplate.md#eventmap)
- [type](/docs/GridTemplate.md#type)

### Methods

- [parseConfig](/docs/GridTemplate.md#parseconfig)
- [updateTemplate](/docs/GridTemplate.md#updatetemplate)

## Constructors

### constructor

• **new GridTemplate**(`config`): [`GridTemplate`](/docs/GridTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TemplateConfig`](/docs/TemplateConfig.md) & [`GridTemplateConfig`](/docs/GridTemplateConfig.md) |

#### Returns

[`GridTemplate`](/docs/GridTemplate.md)

#### Inherited from

[Template](/docs/Template.md).[constructor](/docs/Template.md#constructor)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L92)

## Properties

### config

• **config**: [`TemplateConfig`](/docs/TemplateConfig.md) & [`GridTemplateConfig`](/docs/GridTemplateConfig.md)

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

| Name | Type |
| :------ | :------ |
| `backButtonPressed` | `string` |
| `gridButtonPressed` | `string` |

#### Overrides

Template.eventMap

#### Defined in

[packages/react-native-carplay/src/templates/GridTemplate.ts:39](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/GridTemplate.ts#L39)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

[packages/react-native-carplay/src/templates/GridTemplate.ts:35](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/GridTemplate.ts#L35)

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
