# Interface: Header

## Table of contents

### Properties

- [endActions](/docs/Header.md#endactions)
- [startAction](/docs/Header.md#startaction)
- [title](/docs/Header.md#title)

## Properties

### endActions

• `Optional` **endActions**: [[`HeaderAction`](/docs/Exports.md#headeraction)] \| [[`HeaderAction`](/docs/Exports.md#headeraction), [`HeaderAction`](/docs/Exports.md#headeraction)]

By default, a template will not have end header actions.
Requirements Up to 2 actions (which are APP_ICON, BACK or TYPE_CUSTOM with an icon) at the end of the header.

#### Defined in

[packages/react-native-carplay/src/interfaces/Header.ts:15](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Header.ts#L15)

___

### startAction

• `Optional` **startAction**: [`Action`](/docs/Action.md)<``"appIcon"`` \| ``"back"``\>

By default, a header will not have a start action.
Requirements Only one of APP_ICON or BACK is supported as a start header Action.

#### Defined in

[packages/react-native-carplay/src/interfaces/Header.ts:10](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Header.ts#L10)

___

### title

• **title**: `string`

#### Defined in

[packages/react-native-carplay/src/interfaces/Header.ts:4](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Header.ts#L4)
