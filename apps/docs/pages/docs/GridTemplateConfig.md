# Interface: GridTemplateConfig

## Hierarchy

- [`TemplateConfig`](/docs/TemplateConfig.md)

  ↳ **`GridTemplateConfig`**

## Table of contents

### Properties

- [buttons](/docs/GridTemplateConfig.md#buttons)
- [id](/docs/GridTemplateConfig.md#id)
- [leadingNavigationBarButtons](/docs/GridTemplateConfig.md#leadingnavigationbarbuttons)
- [tabImage](/docs/GridTemplateConfig.md#tabimage)
- [tabSystemImageName](/docs/GridTemplateConfig.md#tabsystemimagename)
- [tabSystemItem](/docs/GridTemplateConfig.md#tabsystemitem)
- [tabTitle](/docs/GridTemplateConfig.md#tabtitle)
- [title](/docs/GridTemplateConfig.md#title)
- [trailingNavigationBarButtons](/docs/GridTemplateConfig.md#trailingnavigationbarbuttons)

### Methods

- [onBarButtonPressed](/docs/GridTemplateConfig.md#onbarbuttonpressed)
- [onButtonPressed](/docs/GridTemplateConfig.md#onbuttonpressed)
- [onDidAppear](/docs/GridTemplateConfig.md#ondidappear)
- [onDidDisappear](/docs/GridTemplateConfig.md#ondiddisappear)
- [onWillAppear](/docs/GridTemplateConfig.md#onwillappear)
- [onWillDisappear](/docs/GridTemplateConfig.md#onwilldisappear)

## Properties

### buttons

• **buttons**: [`GridButton`](/docs/GridButton.md)[]

The array of grid buttons displayed on the template.

#### Defined in

[packages/react-native-carplay/src/templates/GridTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/GridTemplate.ts#L27)

___

### id

• `Optional` **id**: `string`

Give the template your own ID. Must be unique.

#### Inherited from

[TemplateConfig](/docs/TemplateConfig.md).[id](/docs/TemplateConfig.md#id)

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:23](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L23)

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

[packages/react-native-carplay/src/templates/GridTemplate.ts:23](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/GridTemplate.ts#L23)

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

### onButtonPressed

▸ **onButtonPressed**(`e`): `void`

Fired when a button is pressed

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`ButtonPressedEvent`](/docs/ButtonPressedEvent.md) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/templates/GridTemplate.ts:31](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/GridTemplate.ts#L31)

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
