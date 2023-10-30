# Interface: TemplateConfig

## Hierarchy

- **`TemplateConfig`**

  ↳ [`ActionSheetTemplateConfig`](/docs/ActionSheetTemplateConfig.md)

  ↳ [`AlertTemplateConfig`](/docs/AlertTemplateConfig.md)

  ↳ [`ContactTemplateConfig`](/docs/ContactTemplateConfig.md)

  ↳ [`GridTemplateConfig`](/docs/GridTemplateConfig.md)

  ↳ [`InformationTemplateConfig`](/docs/InformationTemplateConfig.md)

  ↳ [`ListTemplateConfig`](/docs/ListTemplateConfig.md)

  ↳ [`MapTemplateConfig`](/docs/MapTemplateConfig.md)

  ↳ [`NowPlayingTemplateConfig`](/docs/NowPlayingTemplateConfig.md)

  ↳ [`PointOfInterestTemplateConfig`](/docs/PointOfInterestTemplateConfig.md)

  ↳ [`SearchTemplateConfig`](/docs/SearchTemplateConfig.md)

  ↳ [`TabBarTemplateConfig`](/docs/TabBarTemplateConfig.md)

  ↳ [`MessageTemplateConfig`](/docs/MessageTemplateConfig.md)

  ↳ [`PaneTemplateConfig`](/docs/PaneTemplateConfig.md)

## Table of contents

### Properties

- [id](/docs/TemplateConfig.md#id)
- [leadingNavigationBarButtons](/docs/TemplateConfig.md#leadingnavigationbarbuttons)
- [tabImage](/docs/TemplateConfig.md#tabimage)
- [tabSystemImageName](/docs/TemplateConfig.md#tabsystemimagename)
- [tabSystemItem](/docs/TemplateConfig.md#tabsystemitem)
- [tabTitle](/docs/TemplateConfig.md#tabtitle)
- [trailingNavigationBarButtons](/docs/TemplateConfig.md#trailingnavigationbarbuttons)

### Methods

- [onBarButtonPressed](/docs/TemplateConfig.md#onbarbuttonpressed)
- [onDidAppear](/docs/TemplateConfig.md#ondidappear)
- [onDidDisappear](/docs/TemplateConfig.md#ondiddisappear)
- [onWillAppear](/docs/TemplateConfig.md#onwillappear)
- [onWillDisappear](/docs/TemplateConfig.md#onwilldisappear)

## Properties

### id

• `Optional` **id**: `string`

Give the template your own ID. Must be unique.

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:23](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L23)

___

### leadingNavigationBarButtons

• `Optional` **leadingNavigationBarButtons**: [`BarButton`](/docs/Exports.md#barbutton)[]

An array of bar buttons to display on the leading side of the navigation bar.

The navigation bar displays up to two buttons in the leading space. When including more than two buttons in the array, the system displays only the first two buttons.
 iOS

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:30](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L30)

___

### tabImage

• `Optional` **tabImage**: `ImageSourcePropType`

Image source for tab

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:49](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L49)

___

### tabSystemImageName

• `Optional` **tabSystemImageName**: `string`

Name of system image for tab

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:45](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L45)

___

### tabSystemItem

• `Optional` **tabSystemItem**: `number`

UITabBarSystemItem

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:41](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L41)

___

### tabTitle

• `Optional` **tabTitle**: `string`

Set tab title

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:53](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L53)

___

### trailingNavigationBarButtons

• `Optional` **trailingNavigationBarButtons**: [`BarButton`](/docs/Exports.md#barbutton)[]

An array of bar buttons to display on the trailing side of the navigation bar.

The navigation bar displays up to two buttons in the trailing space. When including more than two buttons in the array, the system displays only the first two buttons.
 iOS

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

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:63](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L63)
