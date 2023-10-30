# Class: InformationTemplate

## Hierarchy

- [`Template`](/docs/Template.md)<[`InformationTemplateConfig`](/docs/InformationTemplateConfig.md)\>

  ↳ **`InformationTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/InformationTemplate.md#constructor)

### Properties

- [config](/docs/InformationTemplate.md#config)
- [id](/docs/InformationTemplate.md#id)

### Accessors

- [eventMap](/docs/InformationTemplate.md#eventmap)
- [type](/docs/InformationTemplate.md#type)

### Methods

- [parseConfig](/docs/InformationTemplate.md#parseconfig)
- [updateInformationTemplateActions](/docs/InformationTemplate.md#updateinformationtemplateactions)
- [updateInformationTemplateItems](/docs/InformationTemplate.md#updateinformationtemplateitems)
- [updateTemplate](/docs/InformationTemplate.md#updatetemplate)

## Constructors

### constructor

• **new InformationTemplate**(`config`): [`InformationTemplate`](/docs/InformationTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TemplateConfig`](/docs/TemplateConfig.md) & [`InformationTemplateConfig`](/docs/InformationTemplateConfig.md) |

#### Returns

[`InformationTemplate`](/docs/InformationTemplate.md)

#### Inherited from

[Template](/docs/Template.md).[constructor](/docs/Template.md#constructor)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L92)

## Properties

### config

• **config**: [`TemplateConfig`](/docs/TemplateConfig.md) & [`InformationTemplateConfig`](/docs/InformationTemplateConfig.md)

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

[packages/react-native-carplay/src/templates/InformationTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/InformationTemplate.ts#L27)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

[packages/react-native-carplay/src/templates/InformationTemplate.ts:23](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/InformationTemplate.ts#L23)

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

### updateInformationTemplateActions

▸ **updateInformationTemplateActions**(`actions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`InformationAction`](/docs/InformationAction.md)[] |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/InformationTemplate.ts:38](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/InformationTemplate.ts#L38)

___

### updateInformationTemplateItems

▸ **updateInformationTemplateItems**(`items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`InformationItem`](/docs/InformationItem.md)[] |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/InformationTemplate.ts:33](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/InformationTemplate.ts#L33)

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
