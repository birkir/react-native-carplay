# Class: VoiceControlTemplate

Displays a voice control indicator on the CarPlay screen.

CarPlay navigation apps must show the voice control template during audio input.

## Hierarchy

- [`Template`](/docs/Template.md)<[`VoiceControlTemplateConfig`](/docs/VoiceControlTemplateConfig.md)\>

  ↳ **`VoiceControlTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/VoiceControlTemplate.md#constructor)

### Properties

- [config](/docs/VoiceControlTemplate.md#config)
- [id](/docs/VoiceControlTemplate.md#id)

### Accessors

- [eventMap](/docs/VoiceControlTemplate.md#eventmap)
- [type](/docs/VoiceControlTemplate.md#type)

### Methods

- [activateVoiceControlState](/docs/VoiceControlTemplate.md#activatevoicecontrolstate)
- [parseConfig](/docs/VoiceControlTemplate.md#parseconfig)
- [updateTemplate](/docs/VoiceControlTemplate.md#updatetemplate)

## Constructors

### constructor

• **new VoiceControlTemplate**(`config`): [`VoiceControlTemplate`](/docs/VoiceControlTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TemplateConfig`](/docs/TemplateConfig.md) & [`VoiceControlTemplateConfig`](/docs/VoiceControlTemplateConfig.md) |

#### Returns

[`VoiceControlTemplate`](/docs/VoiceControlTemplate.md)

#### Inherited from

[Template](/docs/Template.md).[constructor](/docs/Template.md#constructor)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L92)

## Properties

### config

• **config**: [`TemplateConfig`](/docs/TemplateConfig.md) & [`VoiceControlTemplateConfig`](/docs/VoiceControlTemplateConfig.md)

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

[packages/react-native-carplay/src/templates/VoiceControlTemplate.ts:18](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/VoiceControlTemplate.ts#L18)

## Methods

### activateVoiceControlState

▸ **activateVoiceControlState**(`identifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/VoiceControlTemplate.ts:22](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/VoiceControlTemplate.ts#L22)

___

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
