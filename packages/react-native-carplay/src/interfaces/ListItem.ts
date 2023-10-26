import { ImageSourcePropType } from 'react-native';
import { Action } from './Action';

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
   * @namespace iOS
   */
  showsDisclosureIndicator?: boolean;
  /**
   * Is Playing flag.
   * @namespace iOS
   */
  isPlaying?: boolean;
  /**
   * Sets the initial enabled state for Row.
   * @default true
   * @namespace Android
   */
  enabled?: boolean;
  /**
   * Shows an icon at the end of the row that indicates that the row is browsable.
   * Browsable rows can be used, for example, to represent the parent row in a hierarchy of lists with child lists.
   * If a row is browsable, then no Action or Toggle can be added to it.
   * @namespace Android
   */
  browsable?: boolean;
  /**
   * If a row has a toggle set, then no Action or numeric decoration can be set.
   * @namespace Android
   */
  toggle?: number;
  /**
   * Adds an additional action to the end of the row.
   * @namespace Android
   */
  action?: Action<'custom'>;
}
