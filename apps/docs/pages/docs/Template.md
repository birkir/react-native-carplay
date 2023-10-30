# Class: Template<P\>

## Type parameters

| Name |
| :------ |
| `P` |

## Hierarchy

- **`Template`**

  ↳ [`ActionSheetTemplate`](/docs/ActionSheetTemplate.md)

  ↳ [`AlertTemplate`](/docs/AlertTemplate.md)

  ↳ [`ContactTemplate`](/docs/ContactTemplate.md)

  ↳ [`GridTemplate`](/docs/GridTemplate.md)

  ↳ [`InformationTemplate`](/docs/InformationTemplate.md)

  ↳ [`ListTemplate`](/docs/ListTemplate.md)

  ↳ [`MapTemplate`](/docs/MapTemplate.md)

  ↳ [`NowPlayingTemplate`](/docs/NowPlayingTemplate.md)

  ↳ [`PointOfInterestTemplate`](/docs/PointOfInterestTemplate.md)

  ↳ [`SearchTemplate`](/docs/SearchTemplate.md)

  ↳ [`TabBarTemplate`](/docs/TabBarTemplate.md)

  ↳ [`VoiceControlTemplate`](/docs/VoiceControlTemplate.md)

  ↳ [`MessageTemplate`](/docs/MessageTemplate.md)

  ↳ [`PaneTemplate`](/docs/PaneTemplate.md)

## Table of contents

### Constructors

- [constructor](/docs/Template.md#constructor)

### Properties

- [config](/docs/Template.md#config)
- [id](/docs/Template.md#id)

### Accessors

- [eventMap](/docs/Template.md#eventmap)
- [type](/docs/Template.md#type)

### Methods

- [parseConfig](/docs/Template.md#parseconfig)
- [updateTemplate](/docs/Template.md#updatetemplate)

## Constructors

### constructor

• **new Template**<`P`\>(`config`): [`Template`](/docs/Template.md)<`P`\>

#### Type parameters

| Name |
| :------ |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TemplateConfig`](/docs/TemplateConfig.md) & `P` |

#### Returns

[`Template`](/docs/Template.md)<`P`\>

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L92)

## Properties

### config

• **config**: [`TemplateConfig`](/docs/TemplateConfig.md) & `P`

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:92](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L92)

___

### id

• **id**: `string`

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:86](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L86)

## Accessors

### eventMap

• `get` **eventMap**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:88](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L88)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:83](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L83)

## Methods

### parseConfig

▸ **parseConfig**(`config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`any`

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

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:141](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L141)
