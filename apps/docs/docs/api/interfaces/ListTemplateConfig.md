---
id: "ListTemplateConfig"
title: "Interface: ListTemplateConfig"
sidebar_label: "ListTemplateConfig"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `TemplateConfig`

  ↳ **`ListTemplateConfig`**

## Properties

### emptyViewSubtitleVariants

• `Optional` **emptyViewSubtitleVariants**: `string`[]

 An optional array of strings, ordered from most to least preferred.
 The variant strings should be provided as localized, displayable content.
 The system will select the first variant that fits the available space.
 If the list template does not contain any items (itemCount == 0), then
 the template will display an empty view with a title and subtitle to indicate
 that the template has no list items.
 If the list template is updated to contain items, the empty view will be automatically
 removed.

#### Defined in

templates/ListTemplate.ts:35

___

### emptyViewTitleVariants

• `Optional` **emptyViewTitleVariants**: `string`[]

 An optional array of strings, ordered from most to least preferred.
 The variant strings should be provided as localized, displayable content.
 The system will select the first variant that fits the available space.
 If the list template does not contain any items (itemCount == 0), then
 the template will display an empty view with a title and subtitle to indicate
 that the template has no list items.
 If the list template is updated to contain items, the empty view will be automatically
 removed.

#### Defined in

templates/ListTemplate.ts:24

___

### id

• `Optional` **id**: `string`

Give the template your own ID. Must be unique.

#### Inherited from

TemplateConfig.id

#### Defined in

templates/Template.ts:35

___

### leadingNavigationBarButtons

• `Optional` **leadingNavigationBarButtons**: `BarButton`[]

An array of bar buttons to display on the leading side of the navigation bar.

The navigation bar displays up to two buttons in the leading space. When including more than two buttons in the array, the system displays only the first two buttons.

#### Inherited from

TemplateConfig.leadingNavigationBarButtons

#### Defined in

templates/Template.ts:41

___

### sections

• **sections**: `ListSection`[]

The sections displayed in the list.

#### Defined in

templates/ListTemplate.ts:13

___

### tabImage

• `Optional` **tabImage**: ``null``

Name of system image for tab

#### Inherited from

TemplateConfig.tabImage

#### Defined in

templates/Template.ts:59

___

### tabSystemImg

• `Optional` **tabSystemImg**: `string`

Name of system image for tab

#### Inherited from

TemplateConfig.tabSystemImg

#### Defined in

templates/Template.ts:55

___

### tabSystemItem

• `Optional` **tabSystemItem**: `number`

UITabBarSystemItem

#### Inherited from

TemplateConfig.tabSystemItem

#### Defined in

templates/Template.ts:51

___

### title

• `Optional` **title**: `string`

The title displayed in the navigation bar while the list template is visible.

#### Defined in

templates/ListTemplate.ts:9

___

### trailingNavigationBarButtons

• `Optional` **trailingNavigationBarButtons**: `BarButton`[]

An array of bar buttons to display on the trailing side of the navigation bar.

The navigation bar displays up to two buttons in the trailing space. When including more than two buttons in the array, the system displays only the first two buttons.

#### Inherited from

TemplateConfig.trailingNavigationBarButtons

#### Defined in

templates/Template.ts:47

## Methods

### onBackButtonPressed

▸ `Optional` **onBackButtonPressed**(): `void`

Fired when the back button is pressed

#### Returns

`void`

#### Defined in

templates/ListTemplate.ts:47

___

### onBarButtonPressed

▸ `Optional` **onBarButtonPressed**(`e`): `void`

Fired when bar button is pressed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `BarButtonEvent` | Event |

#### Returns

`void`

#### Inherited from

TemplateConfig.onBarButtonPressed

#### Defined in

templates/Template.ts:85

___

### onDidAppear

▸ `Optional` **onDidAppear**(`e`): `void`

Fired after template appears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `BaseEvent` | Event |

#### Returns

`void`

#### Inherited from

TemplateConfig.onDidAppear

#### Defined in

templates/Template.ts:74

___

### onDidDisappear

▸ `Optional` **onDidDisappear**(`e`): `void`

Fired after template disappears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `BaseEvent` | Event |

#### Returns

`void`

#### Inherited from

TemplateConfig.onDidDisappear

#### Defined in

templates/Template.ts:79

___

### onItemSelect

▸ `Optional` **onItemSelect**(`item`): `Promise`<`void`\>

Fired when list item is selected.
Spinner shows by default.
When the returned promise is resolved the spinner will hide.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Object` | Object with the selected index |
| `item.index` | `number` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

templates/ListTemplate.ts:42

___

### onWillAppear

▸ `Optional` **onWillAppear**(`e`): `void`

Fired before template appears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `BaseEvent` | Event |

#### Returns

`void`

#### Inherited from

TemplateConfig.onWillAppear

#### Defined in

templates/Template.ts:64

___

### onWillDisappear

▸ `Optional` **onWillDisappear**(`e`): `void`

Fired before template disappears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `BaseEvent` | Event |

#### Returns

`void`

#### Inherited from

TemplateConfig.onWillDisappear

#### Defined in

templates/Template.ts:69
