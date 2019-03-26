import { GridButton } from '../interfaces/GridButton';
import { Template } from './Template';

interface GridTemplateConfig {
  title?: string;
  buttons: GridButton[];
}

export class GridTemplate extends Template<GridTemplateConfig> {
  get type() {
    return 'grid';
  }
}
