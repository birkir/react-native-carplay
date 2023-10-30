# Interface: Pane

Represents a list of rows used for displaying informational content and a set of Actions that users can perform based on such content.
 Android

## Table of contents

### Properties

- [actions](/docs/Pane.md#actions)
- [image](/docs/Pane.md#image)
- [items](/docs/Pane.md#items)
- [loading](/docs/Pane.md#loading)

## Properties

### actions

• `Optional` **actions**: [`Action`](/docs/Action.md)<[`ActionType`](/docs/Exports.md#actiontype)\>[]

Actions to display alongside the rows in the pane.
By default, no actions are displayed.

#### Defined in

[packages/react-native-carplay/src/interfaces/Pane.ts:24](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Pane.ts#L24)

___

### image

• `Optional` **image**: `ImageSourcePropType`

Sets an CarIcon to display alongside the rows in the pane.
Image Sizing Guidance To minimize scaling artifacts across a wide range of car screens, apps should provide images targeting a 480 x 480 dp bounding box. If the image exceeds this maximum size in either one of the dimensions, it will be scaled down to be centered inside the bounding box while preserving its aspect ratio.

#### Defined in

[packages/react-native-carplay/src/interfaces/Pane.ts:19](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Pane.ts#L19)

___

### items

• `Optional` **items**: [`ListItem`](/docs/ListItem.md)[]

Rows to display in the list.

#### Defined in

[packages/react-native-carplay/src/interfaces/Pane.ts:28](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Pane.ts#L28)

___

### loading

• `Optional` **loading**: `boolean`

Sets whether the Pane is in a loading state.
If set to true, the UI will display a loading indicator where the list content would be otherwise. The caller is expected to call invalidate and send the new template content to the host once the data is ready. If set to false, the UI shows the actual row contents.

#### Defined in

[packages/react-native-carplay/src/interfaces/Pane.ts:14](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Pane.ts#L14)
