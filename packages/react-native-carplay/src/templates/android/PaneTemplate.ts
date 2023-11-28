import { Action, HeaderAction } from '../../interfaces/Action';
import { Template, TemplateConfig } from '../Template';
import { Pane } from '../../interfaces/Pane';

export interface PaneTemplateConfig extends TemplateConfig {
  pane: Pane;
  headerAction?: HeaderAction;
  actions?: Action[];
  title?: string;
  onButtonPressed?(e: { id: string; templateId: string }): void;
  onBackButtonPressed?(): void;
}

export class PaneTemplate extends Template<PaneTemplateConfig> {
  public get type(): string {
    return 'pane';
  }
  get eventMap() {
    return {
      buttonPressed: 'onButtonPressed',
      backButtonPressed: 'onBackButtonPressed',
    };
  }
}
