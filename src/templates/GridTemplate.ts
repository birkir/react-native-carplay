import { GridButton } from '../interfaces/GridButton';
import { Template } from './Template';

interface GridTemplateConfig {
  /**
   * The title displayed in the navigation bar while the list template is visible.
   */
  title?: string;
  /**
   * The array of grid buttons displayed on the template.
   */
  buttons: GridButton[];
}

export class GridTemplate extends Template<GridTemplateConfig> {
  get type() {
    return 'grid';
  }
}
