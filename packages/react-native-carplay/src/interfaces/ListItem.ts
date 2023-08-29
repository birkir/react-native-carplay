import { ImageSourcePropType } from 'react-native';

/**
 * A list item that appears in a list template.
 */
export interface ListItem {
  /**
   * The primary text displayed in the list item cell.
   */
  text: string;
  /**
   * Extra text displayed below the primary text in the list item cell.
   */
  detailText?: string;
  /**
   * Image from file system displayed on the leading edge of the list item cell.
   */
  image?: ImageSourcePropType;
  /**
   * Url for image displayed on the leading edge of the list item cell.
   */
  imgUrl?: null;
  /**
   * A Boolean value indicating whether the list item cell shows a disclosure indicator on the trailing edge of the list item cell.
   */
  showsDisclosureIndicator?: boolean;
  /**
   * Is Playing flag.
   */
  isPlaying?: boolean;
}
