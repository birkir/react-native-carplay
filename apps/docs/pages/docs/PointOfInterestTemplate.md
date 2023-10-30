# Class: PointOfInterestTemplate

## Hierarchy

- [`Template`](/docs/Template.md)<[`PointOfInterestTemplateConfig`](/docs/PointOfInterestTemplateConfig.md)\>

  ↳ **`PointOfInterestTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/PointOfInterestTemplate.md#constructor)

### Properties

- [config](/docs/PointOfInterestTemplate.md#config)
- [id](/docs/PointOfInterestTemplate.md#id)

### Accessors

- [eventMap](/docs/PointOfInterestTemplate.md#eventmap)
- [type](/docs/PointOfInterestTemplate.md#type)

### Methods

- [parseConfig](/docs/PointOfInterestTemplate.md#parseconfig)
- [updateTemplate](/docs/PointOfInterestTemplate.md#updatetemplate)

## Constructors

### constructor

• **new PointOfInterestTemplate**(`config`): [`PointOfInterestTemplate`](/docs/PointOfInterestTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TemplateConfig`](/docs/TemplateConfig.md) & [`PointOfInterestTemplateConfig`](/docs/PointOfInterestTemplateConfig.md) |

#### Returns

[`PointOfInterestTemplate`](/docs/PointOfInterestTemplate.md)

#### Inherited from

[Template](/docs/Template.md).[constructor](/docs/Template.md#constructor)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L92)

## Properties

### config

• **config**: [`TemplateConfig`](/docs/TemplateConfig.md) & [`PointOfInterestTemplateConfig`](/docs/PointOfInterestTemplateConfig.md)

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
| `didChangeMapRegion` | `string` |
| `didSelectPointOfInterest` | `string` |

#### Overrides

Template.eventMap

#### Defined in

[packages/react-native-carplay/src/templates/PointOfInterestTemplate.ts:34](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/PointOfInterestTemplate.ts#L34)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

[packages/react-native-carplay/src/templates/PointOfInterestTemplate.ts:30](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/PointOfInterestTemplate.ts#L30)

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
