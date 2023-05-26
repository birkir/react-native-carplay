---
id: "ActionSheetTemplateConfig"
title: "Interface: ActionSheetTemplateConfig"
sidebar_label: "ActionSheetTemplateConfig"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `TemplateConfig`

  ↳ **`ActionSheetTemplateConfig`**

## Properties

### actions

• **actions**: `AlertAction`[]

#### Defined in

templates/ActionSheetTemplate.ts:7

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

### message

• `Optional` **message**: `string`

#### Defined in

templates/ActionSheetTemplate.ts:6

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

• **title**: `string`

#### Defined in

templates/ActionSheetTemplate.ts:5

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

### onActionButtonPressed

▸ `Optional` **onActionButtonPressed**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Object` |
| `e.id` | `string` |
| `e.templateId` | `string` |

#### Returns

`void`

#### Defined in

templates/ActionSheetTemplate.ts:8

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
