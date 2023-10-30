# Class: ActionSheetTemplate

## Hierarchy

- [`Template`](/docs/Template.md)<[`ActionSheetTemplateConfig`](/docs/ActionSheetTemplateConfig.md)\>

  ↳ **`ActionSheetTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/ActionSheetTemplate.md#constructor)

### Properties

- [config](/docs/ActionSheetTemplate.md#config)
- [id](/docs/ActionSheetTemplate.md#id)

### Accessors

- [eventMap](/docs/ActionSheetTemplate.md#eventmap)
- [type](/docs/ActionSheetTemplate.md#type)

### Methods

- [parseConfig](/docs/ActionSheetTemplate.md#parseconfig)
- [updateTemplate](/docs/ActionSheetTemplate.md#updatetemplate)

## Constructors

### constructor

• **new ActionSheetTemplate**(`config`): [`ActionSheetTemplate`](/docs/ActionSheetTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TemplateConfig`](/docs/TemplateConfig.md) & [`ActionSheetTemplateConfig`](/docs/ActionSheetTemplateConfig.md) |

#### Returns

[`ActionSheetTemplate`](/docs/ActionSheetTemplate.md)

#### Inherited from

[Template](/docs/Template.md).[constructor](/docs/Template.md#constructor)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L92)

## Properties

### config

• **config**: [`TemplateConfig`](/docs/TemplateConfig.md) & [`ActionSheetTemplateConfig`](/docs/ActionSheetTemplateConfig.md)

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
| `actionButtonPressed` | `string` |

#### Overrides

Template.eventMap

#### Defined in

[packages/react-native-carplay/src/templates/ActionSheetTemplate.ts:16](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ActionSheetTemplate.ts#L16)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

[packages/react-native-carplay/src/templates/ActionSheetTemplate.ts:12](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ActionSheetTemplate.ts#L12)

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
