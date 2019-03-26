import { ListItem } from './ListItem';

export interface ListSection {
  header?: string;
  sectionIndexTitle?: string;
  items: ListItem[];
}
