# Interface: ListItemUpdate

A list item update payload.

## Hierarchy

- [`ListItem`](/docs/ListItem.md)

  ↳ **`ListItemUpdate`**

## Table of contents

### Properties

- [action](/docs/ListItemUpdate.md#action)
- [browsable](/docs/ListItemUpdate.md#browsable)
- [detailText](/docs/ListItemUpdate.md#detailtext)
- [enabled](/docs/ListItemUpdate.md#enabled)
- [id](/docs/ListItemUpdate.md#id)
- [image](/docs/ListItemUpdate.md#image)
- [imgUrl](/docs/ListItemUpdate.md#imgurl)
- [isPlaying](/docs/ListItemUpdate.md#isplaying)
- [itemIndex](/docs/ListItemUpdate.md#itemindex)
- [sectionIndex](/docs/ListItemUpdate.md#sectionindex)
- [showsDisclosureIndicator](/docs/ListItemUpdate.md#showsdisclosureindicator)
- [text](/docs/ListItemUpdate.md#text)
- [toggle](/docs/ListItemUpdate.md#toggle)

## Properties

### action

• `Optional` **action**: [`Action`](/docs/Action.md)<``"custom"``\>

Adds an additional action to the end of the row.
 Android

#### Inherited from

[ListItem](/docs/ListItem.md).[action](/docs/ListItem.md#action)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:60](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L60)

___

### browsable

• `Optional` **browsable**: `boolean`

Shows an icon at the end of the row that indicates that the row is browsable.
Browsable rows can be used, for example, to represent the parent row in a hierarchy of lists with child lists.
If a row is browsable, then no Action or Toggle can be added to it.
 Android

#### Inherited from

[ListItem](/docs/ListItem.md).[browsable](/docs/ListItem.md#browsable)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:50](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L50)

___

### detailText

• `Optional` **detailText**: `string`

Extra text displayed below the primary text in the list item cell.

#### Inherited from

[ListItem](/docs/ListItem.md).[detailText](/docs/ListItem.md#detailtext)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:19](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L19)

___

### enabled

• `Optional` **enabled**: `boolean`

Sets the initial enabled state for Row.

**`Default`**

```ts
true
@namespace Android
```

#### Inherited from

[ListItem](/docs/ListItem.md).[enabled](/docs/ListItem.md#enabled)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:43](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L43)

___

### id

• `Optional` **id**: `string`

References the item by id

#### Inherited from

[ListItem](/docs/ListItem.md).[id](/docs/ListItem.md#id)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:11](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L11)

___

### image

• `Optional` **image**: `ImageSourcePropType`

Image from file system displayed on the leading edge of the list item cell.

#### Inherited from

[ListItem](/docs/ListItem.md).[image](/docs/ListItem.md#image)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:23](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L23)

___

### imgUrl

• `Optional` **imgUrl**: ``null``

Url for image displayed on the leading edge of the list item cell.

#### Inherited from

[ListItem](/docs/ListItem.md).[imgUrl](/docs/ListItem.md#imgurl)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:27](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L27)

___

### isPlaying

• `Optional` **isPlaying**: `boolean`

Is Playing flag.
 iOS

#### Inherited from

[ListItem](/docs/ListItem.md).[isPlaying](/docs/ListItem.md#isplaying)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:37](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L37)

___

### itemIndex

• **itemIndex**: `number`

The index of item.

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItemUpdate.ts:13](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItemUpdate.ts#L13)

___

### sectionIndex

• **sectionIndex**: `number`

The section of item.

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItemUpdate.ts:9](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItemUpdate.ts#L9)

___

### showsDisclosureIndicator

• `Optional` **showsDisclosureIndicator**: `boolean`

A Boolean value indicating whether the list item cell shows a disclosure indicator on the trailing edge of the list item cell.
 iOS

#### Inherited from

[ListItem](/docs/ListItem.md).[showsDisclosureIndicator](/docs/ListItem.md#showsdisclosureindicator)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:32](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L32)

___

### text

• **text**: `string`

The primary text displayed in the list item cell.

#### Inherited from

[ListItem](/docs/ListItem.md).[text](/docs/ListItem.md#text)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:15](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L15)

___

### toggle

• `Optional` **toggle**: `number`

If a row has a toggle set, then no Action or numeric decoration can be set.
 Android

#### Inherited from

[ListItem](/docs/ListItem.md).[toggle](/docs/ListItem.md#toggle)

#### Defined in

[packages/react-native-carplay/src/interfaces/ListItem.ts:55](https://github.com/birkir/react-native-carplay/blob/2f9bd9c/packages/react-native-carplay/src/interfaces/ListItem.ts#L55)
