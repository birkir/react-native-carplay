import { AlertAction } from '../interfaces/AlertAction';
import { Template, TemplateConfig } from './Template';

export interface AlertTemplateConfig extends TemplateConfig {
  titleVariants: string[];
  actions?: AlertAction[];
  onActionButtonPressed?(e: { id: string; templateId: string }): void;
}

export class AlertTemplate extends Template<AlertTemplateConfig> {
  public get type(): string {
    return 'alert';
  }

  get eventMap() {
    return {
      actionButtonPressed: 'onActionButtonPressed',
    };
  }
}
