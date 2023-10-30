# Class: NowPlayingTemplate

## Hierarchy

- [`Template`](/docs/Template.md)<[`NowPlayingTemplateConfig`](/docs/NowPlayingTemplateConfig.md)\>

  ↳ **`NowPlayingTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/NowPlayingTemplate.md#constructor)

### Properties

- [config](/docs/NowPlayingTemplate.md#config)
- [id](/docs/NowPlayingTemplate.md#id)

### Accessors

- [eventMap](/docs/NowPlayingTemplate.md#eventmap)
- [type](/docs/NowPlayingTemplate.md#type)

### Methods

- [parseConfig](/docs/NowPlayingTemplate.md#parseconfig)
- [updateTemplate](/docs/NowPlayingTemplate.md#updatetemplate)

## Constructors

### constructor

• **new NowPlayingTemplate**(`config`): [`NowPlayingTemplate`](/docs/NowPlayingTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TemplateConfig`](/docs/TemplateConfig.md) & [`NowPlayingTemplateConfig`](/docs/NowPlayingTemplateConfig.md) |

#### Returns

[`NowPlayingTemplate`](/docs/NowPlayingTemplate.md)

#### Inherited from

[Template](/docs/Template.md).[constructor](/docs/Template.md#constructor)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L92)

## Properties

### config

• **config**: [`TemplateConfig`](/docs/TemplateConfig.md) & [`NowPlayingTemplateConfig`](/docs/NowPlayingTemplateConfig.md)

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
| `albumArtistButtonPressed` | `string` |
| `buttonPressed` | `string` |
| `upNextButtonPressed` | `string` |

#### Overrides

Template.eventMap

#### Defined in

[packages/react-native-carplay/src/templates/NowPlayingTemplate.ts:31](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/NowPlayingTemplate.ts#L31)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

[packages/react-native-carplay/src/templates/NowPlayingTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/NowPlayingTemplate.ts#L27)

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
