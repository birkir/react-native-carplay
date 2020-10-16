import { Template, TemplateConfig } from './Template';

interface InformationItem {
  title: string;
  detail: string;
}

interface InformationAction {
  id: string;
  title: string;
}

interface InformationTemplateConfig extends TemplateConfig {
  title: string;
  leading?: boolean;
  items: InformationItem[];
  actions: InformationAction[];
  onActionButtonPressed(e: any): void;
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
