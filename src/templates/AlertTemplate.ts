import { AlertAction } from '../interfaces/AlertAction';
import { Template, TemplateConfig } from './Template';

interface AlertTemplateConfig extends TemplateConfig {
  titleVariants: string[];
  actions?: AlertAction[];
  onActionButtonPressed?(e: any): void;
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
