import { CarPlay } from '../CarPlay';
import { ListItem } from '../interfaces/ListItem';
import { BaseEvent, Template, TemplateConfig } from './Template';

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
  /**
   * Fired when search button is pressed
   */
  onSearchButtonPressed?(e: BaseEvent): void;
}

export class SearchTemplate extends Template<SearchTemplateConfig> {

  get type() {
    return 'search';
  }

  get eventMap() {
    return {
      searchButtonPressed: 'onSearchButtonPressed',
    };
  }

  constructor(public config: SearchTemplateConfig) {
    super(config);

    CarPlay.emitter.addListener('updatedSearchText', e => {
      if (config.onSearch && e.templateId === this.id) {
        const x = config.onSearch(e.searchText);
        Promise.resolve(x).then(result => CarPlay.bridge.reactToUpdatedSearchText(result));
      }
    });

    CarPlay.emitter.addListener('selectedResult', e => {
      if (config.onItemSelect && e.templateId === this.id) {
        const x = config.onItemSelect(e);
        Promise.resolve(x).then(() => CarPlay.bridge.reactToSelectedResult(true));
      }
    });
  }
}
