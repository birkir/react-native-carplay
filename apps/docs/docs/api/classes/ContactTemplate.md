---
id: "ContactTemplate"
title: "Class: ContactTemplate"
sidebar_label: "ContactTemplate"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Template`<[`ContactTemplateConfig`](../interfaces/ContactTemplateConfig.md)\>

  ↳ **`ContactTemplate`**

## Constructors

### constructor

• **new ContactTemplate**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TemplateConfig` & [`ContactTemplateConfig`](../interfaces/ContactTemplateConfig.md) |

#### Inherited from

Template<ContactTemplateConfig\>.constructor

#### Defined in

templates/Template.ts:98

## Properties

### config

• **config**: `TemplateConfig` & [`ContactTemplateConfig`](../interfaces/ContactTemplateConfig.md)

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

templates/ContactTemplate.ts:37

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

templates/ContactTemplate.ts:34

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
