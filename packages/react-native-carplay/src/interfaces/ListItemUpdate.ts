import { ListItem } from './ListItem';
/**
 * A list item update payload.
 */
export interface ListItemUpdate extends ListItem {
  /**
   * The section of item.
   */
  sectionIndex: number;
  /**
   * The index of item.
   */
  itemIndex: number;
}
