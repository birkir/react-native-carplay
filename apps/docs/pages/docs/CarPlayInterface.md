# Class: CarPlayInterface

A controller that manages all user interface elements appearing on your map displayed on the CarPlay screen.

## Table of contents

### Constructors

- [constructor](/docs/CarPlayInterface.md#constructor)

### Properties

- [bridge](/docs/CarPlayInterface.md#bridge)
- [connected](/docs/CarPlayInterface.md#connected)
- [emitter](/docs/CarPlayInterface.md#emitter)
- [onConnectCallbacks](/docs/CarPlayInterface.md#onconnectcallbacks)
- [onDisconnectCallbacks](/docs/CarPlayInterface.md#ondisconnectcallbacks)
- [window](/docs/CarPlayInterface.md#window)

### Accessors

- [rootTemplate](/docs/CarPlayInterface.md#roottemplate)
- [topTemplate](/docs/CarPlayInterface.md#toptemplate)

### Methods

- [dismissTemplate](/docs/CarPlayInterface.md#dismisstemplate)
- [enableNowPlaying](/docs/CarPlayInterface.md#enablenowplaying)
- [popTemplate](/docs/CarPlayInterface.md#poptemplate)
- [popToRootTemplate](/docs/CarPlayInterface.md#poptoroottemplate)
- [popToTemplate](/docs/CarPlayInterface.md#poptotemplate)
- [presentTemplate](/docs/CarPlayInterface.md#presenttemplate)
- [pushTemplate](/docs/CarPlayInterface.md#pushtemplate)
- [registerOnConnect](/docs/CarPlayInterface.md#registeronconnect)
- [registerOnDisconnect](/docs/CarPlayInterface.md#registerondisconnect)
- [setRootTemplate](/docs/CarPlayInterface.md#setroottemplate)
- [unregisterOnConnect](/docs/CarPlayInterface.md#unregisteronconnect)
- [unregisterOnDisconnect](/docs/CarPlayInterface.md#unregisterondisconnect)

## Constructors

### constructor

• **new CarPlayInterface**(): [`CarPlayInterface`](/docs/CarPlayInterface.md)

#### Returns

[`CarPlayInterface`](/docs/CarPlayInterface.md)

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:144](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L144)

## Properties

### bridge

• **bridge**: [`InternalCarPlay`](/docs/InternalCarPlay.md) = `RNCarPlay`

React Native bridge to the CarPlay interface

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:128](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L128)

___

### connected

• **connected**: `boolean` = `false`

Boolean to denote if carplay is currently connected.

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:133](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L133)

___

### emitter

• **emitter**: `NativeEventEmitter`

CarPlay Event Emitter

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:139](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L139)

___

### onConnectCallbacks

• `Private` **onConnectCallbacks**: `Set`<[`OnConnectCallback`](/docs/Exports.md#onconnectcallback)\>

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:141](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L141)

___

### onDisconnectCallbacks

• `Private` **onDisconnectCallbacks**: `Set`<[`OnDisconnectCallback`](/docs/Exports.md#ondisconnectcallback)\>

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:142](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L142)

___

### window

• **window**: `undefined` \| [`WindowInformation`](/docs/Exports.md#windowinformation)

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:134](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L134)

## Accessors

### rootTemplate

• `get` **rootTemplate**(): `Promise`<`string`\>

The current root template in the template navigation hierarchy.

#### Returns

`Promise`<`string`\>

**`Todo`**

Not implemented yet

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:257](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L257)

___

### topTemplate

• `get` **topTemplate**(): `Promise`<`string`\>

The top-most template in the navigation hierarchy stack.

#### Returns

`Promise`<`string`\>

**`Todo`**

Not implemented yet

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:265](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L265)

## Methods

### dismissTemplate

▸ **dismissTemplate**(`animated?`): `void`

Dismisses the current presented template
*

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animated` | `boolean` | `true` | A Boolean value that indicates whether the system animates the display of transitioning templates. |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:249](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L249)

___

### enableNowPlaying

▸ **enableNowPlaying**(`enable?`): `void`

Control now playing template state

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `enable` | `boolean` | `true` | A Boolean value that indicates whether the system use now playing template. |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:273](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L273)

___

### popTemplate

▸ **popTemplate**(`animated?`): `void`

Pops the top template from the navigation stack and updates the display.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animated` | `boolean` | `true` | A Boolean value that indicates whether the system animates the display of transitioning templates. |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:232](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L232)

___

### popToRootTemplate

▸ **popToRootTemplate**(`animated?`): `void`

Pops all templates on the stack—except the root template—and updates the display.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animated` | `boolean` | `true` | A Boolean value that indicates whether the system animates the display of transitioning templates. |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:224](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L224)

___

### popToTemplate

▸ **popToTemplate**(`targetTemplate`, `animated?`): `void`

Pops templates until the specified template is at the top of the navigation stack.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `targetTemplate` | [`PushableTemplates`](/docs/Exports.md#pushabletemplates) | `undefined` | The template that you want at the top of the stack. The template must be on the navigation stack before calling this method. |
| `animated` | `boolean` | `true` | A Boolean value that indicates whether the system animates the display of transitioning templates. |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:216](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L216)

___

### presentTemplate

▸ **presentTemplate**(`templateToPresent`, `animated?`): `void`

presents a presentable template, alert / action / voice

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `templateToPresent` | [`PresentableTemplates`](/docs/Exports.md#presentabletemplates) | `undefined` | The presentable template to present |
| `animated` | `boolean` | `true` | A Boolean value that indicates whether the system animates the display of transitioning templates. |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:241](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L241)

___

### pushTemplate

▸ **pushTemplate**(`templateToPush`, `animated?`): `void`

Pushes a template onto the navigation stack and updates the display.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `templateToPush` | [`PushableTemplates`](/docs/Exports.md#pushabletemplates) | `undefined` | The template to push onto the navigation stack. |
| `animated` | `boolean` | `true` | Set TRUE to animate the presentation of the template. |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:207](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L207)

___

### registerOnConnect

▸ **registerOnConnect**(`callback`): `void`

Fired when CarPlay is connected to the device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`OnConnectCallback`](/docs/Exports.md#onconnectcallback) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:174](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L174)

___

### registerOnDisconnect

▸ **registerOnDisconnect**(`callback`): `void`

Fired when CarPlay is disconnected from the device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`OnDisconnectCallback`](/docs/Exports.md#ondisconnectcallback) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:185](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L185)

___

### setRootTemplate

▸ **setRootTemplate**(`rootTemplate`, `animated?`): `void`

Sets the root template, starting a new stack for the template navigation hierarchy.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `rootTemplate` | [`TabBarTemplate`](/docs/TabBarTemplate.md) \| [`PushableTemplates`](/docs/Exports.md#pushabletemplates) | `undefined` | The root template. Replaces the current rootTemplate, if one exists. |
| `animated` | `boolean` | `true` | Set TRUE to animate the presentation of the root template; ignored if there isn't a current rootTemplate. |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:198](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L198)

___

### unregisterOnConnect

▸ **unregisterOnConnect**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`OnConnectCallback`](/docs/Exports.md#onconnectcallback) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:178](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L178)

___

### unregisterOnDisconnect

▸ **unregisterOnDisconnect**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`OnDisconnectCallback`](/docs/Exports.md#ondisconnectcallback) |

#### Returns

`void`

#### Defined in

[packages/react-native-carplay/src/CarPlay.ts:189](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/CarPlay.ts#L189)
