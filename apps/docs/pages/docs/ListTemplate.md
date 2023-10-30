# Class: ListTemplate

A hierarchical list of menu items can be displayed on the CarPlay screen using a list template.

The List Template allows navigation apps to present a hierarchical list of menu items. It includes a navigation bar and a list view.

The navigation bar includes a title, and up to two (2) leading buttons and two (2) trailing buttons. You can customize the appearance of these buttons with icons or text.

Each item in the list view may include an icon, title, subtitle, and an optional disclosure indicator indicating the presence of a submenu. The depth of the menu hierarchy may not exceed 5 levels. Note that some cars limit the total number of items that may be shown in a list.

## Hierarchy

- [`Template`](/docs/Template.md)<[`ListTemplateConfig`](/docs/ListTemplateConfig.md)\>

  ↳ **`ListTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/ListTemplate.md#constructor)

### Properties

- [config](/docs/ListTemplate.md#config)
- [id](/docs/ListTemplate.md#id)

### Accessors

- [eventMap](/docs/ListTemplate.md#eventmap)
- [type](/docs/ListTemplate.md#type)

### Methods

- [getMaximumListItemCount](/docs/ListTemplate.md#getmaximumlistitemcount)
- [getMaximumListSectionCount](/docs/ListTemplate.md#getmaximumlistsectioncount)
- [parseConfig](/docs/ListTemplate.md#parseconfig)
- [updateListTemplateItem](/docs/ListTemplate.md#updatelisttemplateitem)
- [updateSections](/docs/ListTemplate.md#updatesections)
- [updateTemplate](/docs/ListTemplate.md#updatetemplate)

## Constructors

### constructor

• **new ListTemplate**(`config`): [`ListTemplate`](/docs/ListTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ListTemplateConfig`](/docs/ListTemplateConfig.md) |

#### Returns

[`ListTemplate`](/docs/ListTemplate.md)

#### Overrides

[Template](/docs/Template.md).[constructor](/docs/Template.md#constructor)

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:116](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L116)

## Properties

### config

• **config**: [`ListTemplateConfig`](/docs/ListTemplateConfig.md)

#### Inherited from

[Template](/docs/Template.md).[config](/docs/Template.md#config)

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:116](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L116)

___

### id

• **id**: `string`

#### Inherited from

[Template](/docs/Template.md).[id](/docs/Template.md#id)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:86](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L86)

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

[packages/react-native-carplay/src/templates/ListTemplate.ts:110](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L110)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

Template.type

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:106](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L106)

## Methods

### getMaximumListItemCount

▸ **getMaximumListItemCount**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:143](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L143)

___

### getMaximumListSectionCount

▸ **getMaximumListSectionCount**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:147](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L147)

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

[Template](/docs/Template.md).[parseConfig](/docs/Template.md#parseconfig)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:147](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L147)

___

### updateListTemplateItem

▸ **updateListTemplateItem**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ListItemUpdate`](/docs/ListItemUpdate.md) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:135](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L135)

___

### updateSections

▸ **updateSections**(`sections`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sections` | [`ListSection`](/docs/ListSection.md)[] |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:130](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L130)

___

### updateTemplate

▸ **updateTemplate**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `P` |

#### Returns

`void`

#### Inherited from

[Template](/docs/Template.md).[updateTemplate](/docs/Template.md#updatetemplate)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:141](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L141)
