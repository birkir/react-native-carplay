---
id: "SearchTemplate"
title: "Class: SearchTemplate"
sidebar_label: "SearchTemplate"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Template`<[`SearchTemplateConfig`](../interfaces/SearchTemplateConfig.md)\>

  ↳ **`SearchTemplate`**

## Constructors

### constructor

• **new SearchTemplate**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SearchTemplateConfig`](../interfaces/SearchTemplateConfig.md) |

#### Overrides

Template&lt;SearchTemplateConfig\&gt;.constructor

#### Defined in

templates/SearchTemplate.ts:37

## Properties

### config

• **config**: [`SearchTemplateConfig`](../interfaces/SearchTemplateConfig.md)

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
| `searchButtonPressed` | `string` |

#### Overrides

Template.eventMap

#### Defined in

templates/SearchTemplate.ts:31

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

templates/SearchTemplate.ts:27

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
