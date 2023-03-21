import { Template, TemplateConfig } from './Template';

export interface InformationItem {
  title: string;
  detail: string;
}

export interface InformationAction {
  id: string;
  title: string;
}

export interface InformationTemplateConfig extends TemplateConfig {
  title: string;
  leading?: boolean;
  items: InformationItem[];
  actions: InformationAction[];
  onActionButtonPressed(e: { id: string; templateId: string }): void;
}

export class InformationTemplate extends Template<InformationTemplateConfig> {
  public get type(): string {
    return 'information';
  }

  get eventMap() {
    return {
      actionButtonPressed: 'onActionButtonPressed',
    };
  }
}
