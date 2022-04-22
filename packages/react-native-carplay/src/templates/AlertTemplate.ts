import type { AlertAction } from '../interfaces/AlertAction';
import type { TemplateConfig } from './Template';
import { Template } from './Template';

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
