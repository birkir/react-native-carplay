# Class: RoutePreviewNavigationTemplate

A template that supports showing a list of routes alongside a custom drawn map.
The list must have its ItemList.OnSelectedListener set, and the template must have its navigate action set (see setNavigateAction). These are used in conjunction to inform the app that:
- A route has been selected. The app should also highlight the route on the map surface.
- A navigate action has been triggered. The app should begin navigation using the selected route.
The template itself does not expose a drawing surface. In order to draw on the canvas, use setSurfaceCallback.
Template Restrictions In regards to template refreshes, as described in onGetTemplate, this template is considered a refresh of a previous one if:
- The previous template is in a loading state (see setLoading, or
- The template title has not changed, and the number of rows and the title (not counting spans) of each row between the previous and new ItemLists have not changed.
Note that specifically, this means the app should not use this template to continuously refresh the routes as the car moves.
In order to use this template your car app MUST declare that it uses the **androidx.car.app.NAVIGATION_TEMPLATES** permission in the manifest.

## Hierarchy

- `AndroidNavigationBaseTemplate`<[`RoutePreviewNavigationTemplateConfig`](/docs/RoutePreviewNavigationTemplateConfig.md)\>

  ↳ **`RoutePreviewNavigationTemplate`**

## Table of contents

### Constructors

- [constructor](/docs/RoutePreviewNavigationTemplate.md#constructor)

### Properties

- [config](/docs/RoutePreviewNavigationTemplate.md#config)
- [id](/docs/RoutePreviewNavigationTemplate.md#id)

### Accessors

- [eventMap](/docs/RoutePreviewNavigationTemplate.md#eventmap)
- [type](/docs/RoutePreviewNavigationTemplate.md#type)

### Methods

- [parseConfig](/docs/RoutePreviewNavigationTemplate.md#parseconfig)
- [updateTemplate](/docs/RoutePreviewNavigationTemplate.md#updatetemplate)

## Constructors

### constructor

• **new RoutePreviewNavigationTemplate**(`config`): [`RoutePreviewNavigationTemplate`](/docs/RoutePreviewNavigationTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`RoutePreviewNavigationTemplateConfig`](/docs/RoutePreviewNavigationTemplateConfig.md) |

#### Returns

[`RoutePreviewNavigationTemplate`](/docs/RoutePreviewNavigationTemplate.md)

#### Inherited from

AndroidNavigationBaseTemplate<RoutePreviewNavigationTemplateConfig\>.constructor

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L27)

## Properties

### config

• **config**: [`RoutePreviewNavigationTemplateConfig`](/docs/RoutePreviewNavigationTemplateConfig.md)

#### Inherited from

AndroidNavigationBaseTemplate.config

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L27)

___

### id

• **id**: `string`

#### Inherited from

AndroidNavigationBaseTemplate.id

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:86](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L86)

## Accessors

### eventMap

• `get` **eventMap**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `didDismissPanningInterface` | `string` |
| `didShowPanningInterface` | `string` |

#### Inherited from

AndroidNavigationBaseTemplate.eventMap

#### Defined in

[packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts:20](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/AndroidNavigationBaseTemplate.ts#L20)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

AndroidNavigationBaseTemplate.type

#### Defined in

[packages/react-native-carplay/src/templates/android/RoutePreviewNavigationTemplate.ts:63](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/android/RoutePreviewNavigationTemplate.ts#L63)

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

AndroidNavigationBaseTemplate.parseConfig

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:147](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L147)

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

AndroidNavigationBaseTemplate.updateTemplate

#### Defined in

[packages/react-native-carplay/src/templates/Template.ts:141](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/templates/Template.ts#L141)
