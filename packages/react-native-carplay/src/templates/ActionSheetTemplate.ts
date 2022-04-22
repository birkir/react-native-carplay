import type { AlertAction } from '../interfaces/AlertAction';
import type { TemplateConfig } from './Template';
import { Template } from './Template';

export interface ActionSheetTemplateConfig extends TemplateConfig {
  title: string;
  message?: string;
  actions: AlertAction[];
  onActionButtonPressed?(e: { id: string; templateId: string }): void;
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
