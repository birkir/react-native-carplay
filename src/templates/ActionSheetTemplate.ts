import { AlertAction } from '../interfaces/AlertAction';
import { Template, TemplateConfig } from './Template';

interface ActionSheetTemplateConfig extends TemplateConfig {
  title: string;
  message: string;
  actions?: AlertAction[];
  onActionButtonPressed?(e: any): void;
}

export class ActionSheetTemplate extends Template<ActionSheetTemplateConfig> {
  public get type(): string {
    return 'actionsheet';
  }

  get eventMap() {
    return {
      actionButtonPressed: 'onActionButtonPressed',
    };
  }
}
