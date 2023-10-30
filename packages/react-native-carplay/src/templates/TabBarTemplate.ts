import { CarPlay } from '../CarPlay';
import { GridTemplate } from './GridTemplate';
import { InformationTemplate } from './InformationTemplate';
import { ListTemplate } from './ListTemplate';
import { PointOfInterestTemplate } from './PointOfInterestTemplate';
import { Template, TemplateConfig } from './Template';

export type TabBarTemplates =
  | ListTemplate
  | GridTemplate
  | InformationTemplate
  | PointOfInterestTemplate;

export interface TabBarTemplateConfig extends TemplateConfig {
  /**
   * The title displayed in the navigation bar while the tab bar template is visible.
   */
  title?: string;
  /**
   * The templates to show as tabs.
   */
  templates: TabBarTemplates[];

  onTemplateSelect(
    template: TabBarTemplates | undefined,
    e: { templateId: string; selectedTemplateId: string },
  ): void;
}

/**/
export class TabBarTemplate extends Template<TabBarTemplateConfig> {
  public get type(): string {
    return 'tabbar';
  }

  constructor(public config: TabBarTemplateConfig) {
    super(config);

    CarPlay.emitter.addListener(
      'didSelectTemplate',
      (e: { templateId: string; selectedTemplateId: string }) => {
        if (config.onTemplateSelect && e.templateId === this.id) {
          config.onTemplateSelect(
            config.templates.find(tpl => tpl.id === e.selectedTemplateId),
            e,
          );
        }
      },
    );
  }

  public updateTemplates = (config: TabBarTemplateConfig) => {
    this.config = config;
    return CarPlay.bridge.updateTabBarTemplates(this.id, this.parseConfig(config));
  };
}
