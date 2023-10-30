# Interface: ListTemplateConfig

## Hierarchy

- [`TemplateConfig`](/docs/TemplateConfig.md)

  ↳ **`ListTemplateConfig`**

## Table of contents

### Properties

- [actions](/docs/ListTemplateConfig.md#actions)
- [assistant](/docs/ListTemplateConfig.md#assistant)
- [backButtonHidden](/docs/ListTemplateConfig.md#backbuttonhidden)
- [emptyViewSubtitleVariants](/docs/ListTemplateConfig.md#emptyviewsubtitlevariants)
- [emptyViewTitleVariants](/docs/ListTemplateConfig.md#emptyviewtitlevariants)
- [headerAction](/docs/ListTemplateConfig.md#headeraction)
- [id](/docs/ListTemplateConfig.md#id)
- [items](/docs/ListTemplateConfig.md#items)
- [leadingNavigationBarButtons](/docs/ListTemplateConfig.md#leadingnavigationbarbuttons)
- [loading](/docs/ListTemplateConfig.md#loading)
- [sections](/docs/ListTemplateConfig.md#sections)
- [tabImage](/docs/ListTemplateConfig.md#tabimage)
- [tabSystemImageName](/docs/ListTemplateConfig.md#tabsystemimagename)
- [tabSystemItem](/docs/ListTemplateConfig.md#tabsystemitem)
- [tabTitle](/docs/ListTemplateConfig.md#tabtitle)
- [title](/docs/ListTemplateConfig.md#title)
- [trailingNavigationBarButtons](/docs/ListTemplateConfig.md#trailingnavigationbarbuttons)

### Methods

- [onBackButtonPressed](/docs/ListTemplateConfig.md#onbackbuttonpressed)
- [onBarButtonPressed](/docs/ListTemplateConfig.md#onbarbuttonpressed)
- [onDidAppear](/docs/ListTemplateConfig.md#ondidappear)
- [onDidDisappear](/docs/ListTemplateConfig.md#ondiddisappear)
- [onItemSelect](/docs/ListTemplateConfig.md#onitemselect)
- [onWillAppear](/docs/ListTemplateConfig.md#onwillappear)
- [onWillDisappear](/docs/ListTemplateConfig.md#onwilldisappear)

## Properties

### actions

• `Optional` **actions**: [[`Action`](/docs/Action.md)<``"custom"``\>] \| [[`Action`](/docs/Action.md)<``"custom"``\>, [`Action`](/docs/Action.md)<``"custom"``\>]

Sets the ActionStrip for this template or null to not display an .
This template allows up to 2 Actions. Of the 2 allowed Actions, one of them can contain a title as set via setTitle. Otherwise, only Actions with icons are allowed.

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:93](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L93)

___

### assistant

• `Optional` **assistant**: `Object`

Assistant Configuration

**`See`**

https://developer.apple.com/documentation/carplay/cplisttemplate#3762508
 iOS

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"playMedia"`` \| ``"startCall"`` |
| `enabled` | `boolean` |
| `position` | ``"top"`` \| ``"bottom"`` |
| `visibility` | ``"off"`` \| ``"always"`` \| ``"limited"`` |

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:71](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L71)

___

### backButtonHidden

• `Optional` **backButtonHidden**: `boolean`

Option to hide back button

**`Default`**

```ts
false
```

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:64](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L64)

___

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
  iOS

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:46](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L46)

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
 iOS

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:34](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L34)

___

### headerAction

• `Optional` **headerAction**: [`Action`](/docs/Action.md)<``"appIcon"`` \| ``"back"``\>

Sets the Action that will be displayed in the header of the template.
 Android

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:88](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L88)

___

### id

• `Optional` **id**: `string`

Give the template your own ID. Must be unique.

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[id](/docs/TemplateConfig.md#id)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:23](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L23)

___

### items

• `Optional` **items**: [`ListItem`](/docs/ListItem.md)[]

Sets a single ItemList to show in the template.
 Android

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:22](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L22)

___

### leadingNavigationBarButtons

• `Optional` **leadingNavigationBarButtons**: [`BarButton`](/docs/Exports.md#barbutton)[]

An array of bar buttons to display on the leading side of the navigation bar.

The navigation bar displays up to two buttons in the leading space. When including more than two buttons in the array, the system displays only the first two buttons.
 iOS

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[leadingNavigationBarButtons](/docs/TemplateConfig.md#leadingnavigationbarbuttons)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:30](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L30)

___

### loading

• `Optional` **loading**: `boolean`

Sets whether the template is in a loading state.
If set to true, the UI will display a loading indicator where the list content would be otherwise. The caller is expected to call invalidate and send the new template content to the host once the data is ready.
If set to false, the UI will display the contents of the ItemList instance(s) added via setSingleList or addSectionedList.
 Android

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:83](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L83)

___

### sections

• `Optional` **sections**: [`ListSection`](/docs/ListSection.md)[]

The sections displayed in the list.

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:17](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L17)

___

### tabImage

• `Optional` **tabImage**: `ImageSourcePropType`

Image source for tab

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[tabImage](/docs/TemplateConfig.md#tabimage)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:49](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L49)

___

### tabSystemImageName

• `Optional` **tabSystemImageName**: `string`

Name of system image for tab

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[tabSystemImageName](/docs/TemplateConfig.md#tabsystemimagename)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:45](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L45)

___

### tabSystemItem

• `Optional` **tabSystemItem**: `number`

UITabBarSystemItem

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[tabSystemItem](/docs/TemplateConfig.md#tabsystemitem)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:41](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L41)

___

### tabTitle

• `Optional` **tabTitle**: `string`

Set tab title

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[tabTitle](/docs/TemplateConfig.md#tabtitle)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:53](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L53)

___

### title

• `Optional` **title**: `string`

The title displayed in the navigation bar while the list template is visible.

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:13](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L13)

___

### trailingNavigationBarButtons

• `Optional` **trailingNavigationBarButtons**: [`BarButton`](/docs/Exports.md#barbutton)[]

An array of bar buttons to display on the trailing side of the navigation bar.

The navigation bar displays up to two buttons in the trailing space. When including more than two buttons in the array, the system displays only the first two buttons.
 iOS

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[trailingNavigationBarButtons](/docs/TemplateConfig.md#trailingnavigationbarbuttons)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:37](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L37)

## Methods

### onBackButtonPressed

▸ **onBackButtonPressed**(): `void`

Fired when the back button is pressed

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/ListTemplate.ts:58](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L58)

___

### onBarButtonPressed

▸ **onBarButtonPressed**(`e`): `void`

Fired when bar button is pressed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`BarButtonEvent`](/docs/BarButtonEvent.md) | Event |

#### Returns

`void`

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[onBarButtonPressed](/docs/TemplateConfig.md#onbarbuttonpressed)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:79](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L79)

___

### onDidAppear

▸ **onDidAppear**(`e`): `void`

Fired after template appears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`BaseEvent`](/docs/BaseEvent.md) | Event |

#### Returns

`void`

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[onDidAppear](/docs/TemplateConfig.md#ondidappear)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:68](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L68)

___

### onDidDisappear

▸ **onDidDisappear**(`e`): `void`

Fired after template disappears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`BaseEvent`](/docs/BaseEvent.md) | Event |

#### Returns

`void`

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[onDidDisappear](/docs/TemplateConfig.md#ondiddisappear)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:73](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L73)

___

### onItemSelect

▸ **onItemSelect**(`item`): `Promise`<`void`\>

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

[packages/react-native-carplay/src/templates/ListTemplate.ts:53](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/ListTemplate.ts#L53)

___

### onWillAppear

▸ **onWillAppear**(`e`): `void`

Fired before template appears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`BaseEvent`](/docs/BaseEvent.md) | Event |

#### Returns

`void`

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[onWillAppear](/docs/TemplateConfig.md#onwillappear)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:58](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L58)

___

### onWillDisappear

▸ **onWillDisappear**(`e`): `void`

Fired before template disappears

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`BaseEvent`](/docs/BaseEvent.md) | Event |

#### Returns

`void`

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[onWillDisappear](/docs/TemplateConfig.md#onwilldisappear)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:63](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L63)
