# Interface: GridButton

A menu item button displayed on a grid template.

## Table of contents

### Properties

- [disabled](/docs/GridButton.md#disabled)
- [id](/docs/GridButton.md#id)
- [image](/docs/GridButton.md#image)
- [titleVariants](/docs/GridButton.md#titlevariants)

## Properties

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

[packages/react-native-carplay/src/interfaces/GridButton.ts:24](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/GridButton.ts#L24)

___

### id

• **id**: `string`

Button ID

#### Defined in

[packages/react-native-carplay/src/interfaces/GridButton.ts:10](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/GridButton.ts#L10)

___

### image

• **image**: `ImageSourcePropType`

The image displayed on the button.

When creating a grid button, don't provide an animated image. If you do, the button uses the first image in the animation sequence.

#### Defined in

[packages/react-native-carplay/src/interfaces/GridButton.ts:22](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/GridButton.ts#L22)

___

### titleVariants

• **titleVariants**: `string`[]

An array of title variants for the button.

When the system displays the button, it selects the title that best fits the available screen space, so arrange the titles from most to least preferred when creating a grid button. Also, localize each title for display to the user, and be sure to include at least one title in the array.

#### Defined in

[packages/react-native-carplay/src/interfaces/GridButton.ts:16](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/GridButton.ts#L16)
