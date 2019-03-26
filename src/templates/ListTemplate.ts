import { CarPlay } from '../CarPlay';
import { ListSection } from '../interfaces/ListSection';
import { Template, TemplateConfig } from './Template';

interface ListTemplateConfig extends TemplateConfig {
  title?: string;
  sections: ListSection[];
  onItemSelect(item: any): Promise<void>;
}

export class ListTemplate extends Template<ListTemplateConfig> {
  get type() {
    return 'list';
  }

  constructor(props: ListTemplateConfig) {
    super(props);

    CarPlay.emitter.addListener('didSelectListItem', e => {
      if (props.onItemSelect && e.templateId === this.id) {
        const x = props.onItemSelect(e);
        Promise.resolve(x).then(() => CarPlay.bridge.reactToSelectedResult(true));
      }
    });
  }

  public updateSections = sections => {
    return CarPlay.bridge.updateListTemplateSections(this.id, this.parseConfig(sections));
  };
}
