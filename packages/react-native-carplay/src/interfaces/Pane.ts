import { ImageSourcePropType } from 'react-native';
import { Action } from './Action';
import { ListItem } from './ListItem';

/**
 * Represents a list of rows used for displaying informational content and a set of Actions that users can perform based on such content.
 * @namespace Android
 */
export interface Pane {
  /**
   * Sets whether the Pane is in a loading state.
   * If set to true, the UI will display a loading indicator where the list content would be otherwise. The caller is expected to call invalidate and send the new template content to the host once the data is ready. If set to false, the UI shows the actual row contents.
   */
  loading?: boolean;
  /**
   * Sets an CarIcon to display alongside the rows in the pane.
   * Image Sizing Guidance To minimize scaling artifacts across a wide range of car screens, apps should provide images targeting a 480 x 480 dp bounding box. If the image exceeds this maximum size in either one of the dimensions, it will be scaled down to be centered inside the bounding box while preserving its aspect ratio.
   */
  image?: ImageSourcePropType;
  /**
   * Actions to display alongside the rows in the pane.
   * By default, no actions are displayed.
   */
  actions?: Action[];
  /**
   * Rows to display in the list.
   */
  items?: ListItem[];
}
