---
id: "InformationTemplate"
title: "Class: InformationTemplate"
sidebar_label: "InformationTemplate"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Template`<[`InformationTemplateConfig`](../interfaces/InformationTemplateConfig.md)\>

  ↳ **`InformationTemplate`**

## Constructors

### constructor

• **new InformationTemplate**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TemplateConfig` & [`InformationTemplateConfig`](../interfaces/InformationTemplateConfig.md) |

#### Inherited from

Template<InformationTemplateConfig\>.constructor

#### Defined in

templates/Template.ts:98

## Properties

### config

• **config**: `TemplateConfig` & [`InformationTemplateConfig`](../interfaces/InformationTemplateConfig.md)

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

| Name | Type |
| :------ | :------ |
| `actionButtonPressed` | `string` |

#### Overrides

Template.eventMap

#### Defined in

templates/InformationTemplate.ts:26

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

templates/InformationTemplate.ts:22

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

Template.parseConfig

#### Defined in

templates/Template.ts:137
