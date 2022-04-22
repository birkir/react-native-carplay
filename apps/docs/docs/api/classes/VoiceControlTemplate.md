---
id: "VoiceControlTemplate"
title: "Class: VoiceControlTemplate"
sidebar_label: "VoiceControlTemplate"
sidebar_position: 0
custom_edit_url: null
---

Displays a voice control indicator on the CarPlay screen.

CarPlay navigation apps must show the voice control template during audio input.

## Hierarchy

- `Template`<[`VoiceControlTemplateConfig`](../interfaces/VoiceControlTemplateConfig.md)\>

  ↳ **`VoiceControlTemplate`**

## Constructors

### constructor

• **new VoiceControlTemplate**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TemplateConfig` & [`VoiceControlTemplateConfig`](../interfaces/VoiceControlTemplateConfig.md) |

#### Inherited from

Template<VoiceControlTemplateConfig\>.constructor

#### Defined in

templates/Template.ts:98

## Properties

### config

• **config**: `TemplateConfig` & [`VoiceControlTemplateConfig`](../interfaces/VoiceControlTemplateConfig.md)

#### Inherited from

Template.config

___

### id

• **id**: `string`

#### Inherited from

Template.id

#### Defined in

templates/Template.ts:92

## Accessors

### eventMap

• `get` **eventMap**(): `Object`

#### Returns

`Object`

#### Inherited from

Template.eventMap

#### Defined in

templates/Template.ts:94

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

templates/VoiceControlTemplate.ts:18

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

templates/VoiceControlTemplate.ts:22

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

Template.parseConfig

#### Defined in

templates/Template.ts:137
