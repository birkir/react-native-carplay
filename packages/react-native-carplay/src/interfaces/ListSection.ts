import { ListItem } from './ListItem';

/**
 * A section of list items that appear in a list template.
 */
export interface ListSection {
  /**
   * The section header text.
   */
  header?: string;
  /**
   * The section index title.
   *
   * The system displays only the first character of the section index title.
   */
  sectionIndexTitle?: string;
  /**
   * The list of items for the section.
   */
  items: ListItem[];
}
