---
id: "AlertTemplate"
title: "Class: AlertTemplate"
sidebar_label: "AlertTemplate"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Template`<[`AlertTemplateConfig`](../interfaces/AlertTemplateConfig.md)\>

  ↳ **`AlertTemplate`**

## Constructors

### constructor

• **new AlertTemplate**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TemplateConfig` & [`AlertTemplateConfig`](../interfaces/AlertTemplateConfig.md) |

#### Inherited from

Template<AlertTemplateConfig\>.constructor

#### Defined in

templates/Template.ts:98

## Properties

### config

• **config**: `TemplateConfig` & [`AlertTemplateConfig`](../interfaces/AlertTemplateConfig.md)

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

templates/AlertTemplate.ts:15

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

templates/AlertTemplate.ts:11

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
