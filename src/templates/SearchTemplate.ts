import { CarPlay } from '../CarPlay';
import { ListItem } from '../interfaces/ListItem';
import { Template, TemplateConfig } from './Template';

interface SearchTemplateConfig extends TemplateConfig {
  /**
   * Fired when search input is changed.
   * Must return list of items to show.
   * @param query Search query
   */
  onSearch?(query: string): Promise<ListItem[]>;
  /**
   * Fired when result item is selected.
   * Spinner shows by default.
   * When the returned promise is resolved the spinner will hide.
   * @param item Object with the selected index
   */
  onItemSelect?(item: { index: number }): Promise<void>;
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
