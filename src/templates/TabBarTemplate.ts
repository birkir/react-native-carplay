import { CarPlay } from '../CarPlay';
import { GridTemplate } from './GridTemplate';
import { InformationTemplate } from './InformationTemplate';
import { ListTemplate } from './ListTemplate';
import { PointOfInterestTemplate } from './PointOfInterestTemplate';
import { Template, TemplateConfig } from './Template';

type TabBarTemplates = ListTemplate | GridTemplate | InformationTemplate | PointOfInterestTemplate;

interface TabBarTemplateConfig extends TemplateConfig {
  /**
   * The title displayed in the navigation bar while the tab bar template is visible.
   */
  title?: string;
  /**
   * The templates to show as tabs.
   */
  templates: TabBarTemplates[];

  onTemplateSelect(template: TabBarTemplates, e: { templateId: string; selectedTemplateId: string; }): void;
}

/**/
export class TabBarTemplate extends Template<TabBarTemplateConfig> {
  public get type(): string {
    return 'tabbar';
  }

  constructor(public config: TabBarTemplateConfig) {
    super(config);

    CarPlay.emitter.addListener('didSelectTemplate', e => {
      if (config.onTemplateSelect && e.templateId === this.id) {
        config.onTemplateSelect(config.templates.find(tpl => tpl.id === e.selectedTemplateId), e);
      }
    });
  }
}
