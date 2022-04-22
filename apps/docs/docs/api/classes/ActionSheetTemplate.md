---
id: "ActionSheetTemplate"
title: "Class: ActionSheetTemplate"
sidebar_label: "ActionSheetTemplate"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Template`<[`ActionSheetTemplateConfig`](../interfaces/ActionSheetTemplateConfig.md)\>

  ↳ **`ActionSheetTemplate`**

## Constructors

### constructor

• **new ActionSheetTemplate**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TemplateConfig` & [`ActionSheetTemplateConfig`](../interfaces/ActionSheetTemplateConfig.md) |

#### Inherited from

Template<ActionSheetTemplateConfig\>.constructor

#### Defined in

templates/Template.ts:98

## Properties

### config

• **config**: `TemplateConfig` & [`ActionSheetTemplateConfig`](../interfaces/ActionSheetTemplateConfig.md)

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

templates/ActionSheetTemplate.ts:16

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

templates/ActionSheetTemplate.ts:12

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
