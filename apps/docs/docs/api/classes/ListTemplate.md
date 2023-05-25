---
id: "ListTemplate"
title: "Class: ListTemplate"
sidebar_label: "ListTemplate"
sidebar_position: 0
custom_edit_url: null
---

A hierarchical list of menu items can be displayed on the CarPlay screen using a list template.

The List Template allows navigation apps to present a hierarchical list of menu items. It includes a navigation bar and a list view.

The navigation bar includes a title, and up to two (2) leading buttons and two (2) trailing buttons. You can customize the appearance of these buttons with icons or text.

Each item in the list view may include an icon, title, subtitle, and an optional disclosure indicator indicating the presence of a submenu. The depth of the menu hierarchy may not exceed 5 levels. Note that some cars limit the total number of items that may be shown in a list.

## Hierarchy

- `Template`<[`ListTemplateConfig`](../interfaces/ListTemplateConfig.md)\>

  ↳ **`ListTemplate`**

## Constructors

### constructor

• **new ListTemplate**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ListTemplateConfig`](../interfaces/ListTemplateConfig.md) |

#### Overrides

Template&lt;ListTemplateConfig\&gt;.constructor

#### Defined in

templates/ListTemplate.ts:70

## Properties

### config

• **config**: [`ListTemplateConfig`](../interfaces/ListTemplateConfig.md)

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
| `backButtonPressed` | `string` |

#### Overrides

Template.eventMap

#### Defined in

templates/ListTemplate.ts:64

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

templates/ListTemplate.ts:60

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

___

### updateListTemplateItem

▸ **updateListTemplateItem**(`config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ListItemUpdate` |

#### Returns

`any`

#### Defined in

templates/ListTemplate.ts:85

___

### updateSections

▸ **updateSections**(`sections`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sections` | `ListSection`[] |

#### Returns

`any`

#### Defined in

templates/ListTemplate.ts:81
