# Interface: Maneuver

Navigation instructions and distance from the previous maneuver.

## Table of contents

### Properties

- [dashboardInstructionVariants](/docs/Maneuver.md#dashboardinstructionvariants)
- [initialTravelEstimates](/docs/Maneuver.md#initialtravelestimates)
- [instructionVariants](/docs/Maneuver.md#instructionvariants)
- [junctionImage](/docs/Maneuver.md#junctionimage)
- [notificationInstructionVariants](/docs/Maneuver.md#notificationinstructionvariants)
- [symbolImage](/docs/Maneuver.md#symbolimage)
- [symbolImageSize](/docs/Maneuver.md#symbolimagesize)
- [tintSymbolImage](/docs/Maneuver.md#tintsymbolimage)

## Properties

### dashboardInstructionVariants

• `Optional` **dashboardInstructionVariants**: `string`[]

#### Defined in

[packages/react-native-carplay/src/interfaces/Maneuver.ts:28](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Maneuver.ts#L28)

___

### initialTravelEstimates

• `Optional` **initialTravelEstimates**: [`TravelEstimates`](/docs/TravelEstimates.md)

#### Defined in

[packages/react-native-carplay/src/interfaces/Maneuver.ts:9](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Maneuver.ts#L9)

___

### instructionVariants

• **instructionVariants**: `string`[]

#### Defined in

[packages/react-native-carplay/src/interfaces/Maneuver.ts:25](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Maneuver.ts#L25)

___

### junctionImage

• `Optional` **junctionImage**: `ImageSourcePropType`

#### Defined in

[packages/react-native-carplay/src/interfaces/Maneuver.ts:8](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Maneuver.ts#L8)

___

### notificationInstructionVariants

• `Optional` **notificationInstructionVariants**: `string`[]

#### Defined in

[packages/react-native-carplay/src/interfaces/Maneuver.ts:29](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Maneuver.ts#L29)

___

### symbolImage

• `Optional` **symbolImage**: `ImageSourcePropType`

#### Defined in

[packages/react-native-carplay/src/interfaces/Maneuver.ts:10](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Maneuver.ts#L10)

___

### symbolImageSize

• `Optional` **symbolImageSize**: `Object`

The size of the image in points. Please read the CarPlay App Programming Guide
to get the recommended size.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[packages/react-native-carplay/src/interfaces/Maneuver.ts:15](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Maneuver.ts#L15)

___

### tintSymbolImage

• `Optional` **tintSymbolImage**: ``null`` \| `string` \| `number` \| `OpaqueColorValue`

Allows the supplied symbol image to be tinted
via a color, ie. 'red'. This functionality would usually
be available via the `<Image>` tag but carplay requires
an image asset to this tinting is done on the native side.
If a string is supplied, it will be passed to `processColor`.
You may also use `processColor` yourself.

#### Defined in

[packages/react-native-carplay/src/interfaces/Maneuver.ts:24](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/Maneuver.ts#L24)
