import { CarPlay } from '../CarPlay';
import { ListItem } from '../interfaces/ListItem';
import { Template, TemplateConfig } from './Template';

interface SearchTemplateConfig extends TemplateConfig {
  onSearch(query: string): Promise<ListItem[]>;
  onItemSelect(item: any): Promise<void>;
}

export class SearchTemplate extends Template<SearchTemplateConfig> {
  public events = ['updatedSearchText', 'searchButtonPressed', 'selectedResult'];

  get type() {
    return 'search';
  }

  constructor(props: SearchTemplateConfig) {
    super(props);

    CarPlay.emitter.addListener('updatedSearchText', e => {
      if (props.onSearch && e.templateId === this.id) {
        const x = props.onSearch(e.searchText);
        Promise.resolve(x).then(result => CarPlay.bridge.reactToUpdatedSearchText(result));
      }
    });

    CarPlay.emitter.addListener('selectedResult', e => {
      if (props.onItemSelect && e.templateId === this.id) {
        const x = props.onItemSelect(e);
        Promise.resolve(x).then(() => CarPlay.bridge.reactToSelectedResult(true));
      }
    });
  }
}
