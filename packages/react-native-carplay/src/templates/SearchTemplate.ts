import { CarPlay } from '../CarPlay';
import { ListItem } from '../interfaces/ListItem';
import { BaseEvent, Template, TemplateConfig } from './Template';
import { Image, Platform } from 'react-native';

export interface SearchTemplateConfig extends TemplateConfig {
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
  public get type(): string {
    return 'search';
  }

  get eventMap() {
    return {
      searchButtonPressed: 'onSearchButtonPressed',
    };
  }

  constructor(public config: SearchTemplateConfig) {
    // parse out any images in the results

    super(config);

    CarPlay.emitter.addListener(
      'updatedSearchText',
      (e: { searchText: string; templateId: string }) => {
        if (config.onSearch && e.templateId === this.id) {
          void Promise.resolve(config.onSearch(e.searchText)).then((result = []) => {
            if (Platform.OS === 'ios') {
              const parsedResults = result.map(item => ({
                ...item,
                image: item.image ? Image.resolveAssetSource(item.image) : undefined,
              }));
              CarPlay.bridge.reactToUpdatedSearchText(parsedResults);
            }
          });
        }
      },
    );

    CarPlay.emitter.addListener(
      'selectedResult',
      (e: { templateId: string; index: number; id?: string }) => {
        if (config.onItemSelect && e.templateId === this.id) {
          void Promise.resolve(config.onItemSelect(e)).then(
            () => Platform.OS === 'ios' && CarPlay.bridge.reactToSelectedResult(true),
          );
        }
      },
    );
  }
}
