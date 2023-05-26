---
id: "GridTemplate"
title: "Class: GridTemplate"
sidebar_label: "GridTemplate"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Template`<[`GridTemplateConfig`](../interfaces/GridTemplateConfig.md)\>

  ↳ **`GridTemplate`**

## Constructors

### constructor

• **new GridTemplate**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TemplateConfig` & [`GridTemplateConfig`](../interfaces/GridTemplateConfig.md) |

#### Inherited from

Template<GridTemplateConfig\>.constructor

#### Defined in

templates/Template.ts:98

## Properties

### config

• **config**: `TemplateConfig` & [`GridTemplateConfig`](../interfaces/GridTemplateConfig.md)

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
| `gridButtonPressed` | `string` |

#### Overrides

Template.eventMap

#### Defined in

templates/GridTemplate.ts:40

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

templates/GridTemplate.ts:36

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
