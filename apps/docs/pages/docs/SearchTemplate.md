# Class: SearchTemplate

## Hierarchy

- [`Template`](/docs/Template.md)<[`SearchTemplateConfig`](/docs/SearchTemplateConfig.md)\>

  ↳ **`SearchTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/SearchTemplate.md#constructor)

### Properties

- [config](/docs/SearchTemplate.md#config)
- [id](/docs/SearchTemplate.md#id)

### Accessors

- [eventMap](/docs/SearchTemplate.md#eventmap)
- [type](/docs/SearchTemplate.md#type)

### Methods

- [parseConfig](/docs/SearchTemplate.md#parseconfig)
- [updateTemplate](/docs/SearchTemplate.md#updatetemplate)

## Constructors

### constructor

• **new SearchTemplate**(`config`): [`SearchTemplate`](/docs/SearchTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SearchTemplateConfig`](/docs/SearchTemplateConfig.md) |

#### Returns

[`SearchTemplate`](/docs/SearchTemplate.md)

#### Overrides

[Template](/docs/Template.md).[constructor](/docs/Template.md#constructor)

#### Defined in

[packages/react-native-carplay/src/templates/SearchTemplate.ts:37](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/SearchTemplate.ts#L37)

## Properties

### config

• **config**: [`SearchTemplateConfig`](/docs/SearchTemplateConfig.md)

#### Inherited from

[Template](/docs/Template.md).[config](/docs/Template.md#config)

#### Defined in

[packages/react-native-carplay/src/templates/SearchTemplate.ts:37](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/SearchTemplate.ts#L37)

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
| `searchButtonPressed` | `string` |

#### Overrides

Template.eventMap

#### Defined in

[packages/react-native-carplay/src/templates/SearchTemplate.ts:31](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/SearchTemplate.ts#L31)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

[packages/react-native-carplay/src/templates/SearchTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/SearchTemplate.ts#L27)

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
