import { CarPlay } from '../CarPlay';
import { ListItemUpdate } from '../interfaces/ListItemUpdate';
import { ListSection } from '../interfaces/ListSection';
import { Template, TemplateConfig } from './Template';
export interface ListTemplateConfig extends TemplateConfig {
  /**
   * The title displayed in the navigation bar while the list template is visible.
   */
  title?: string;
  /**
   * The sections displayed in the list.
   */
  sections: ListSection[];
  /**
   *  An optional array of strings, ordered from most to least preferred.
   *  The variant strings should be provided as localized, displayable content.
   *  The system will select the first variant that fits the available space.
   *  If the list template does not contain any items (itemCount == 0), then
   *  the template will display an empty view with a title and subtitle to indicate
   *  that the template has no list items.
   *  If the list template is updated to contain items, the empty view will be automatically
   *  removed.
   */
  emptyViewTitleVariants?: string[];
  /**
   *  An optional array of strings, ordered from most to least preferred.
   *  The variant strings should be provided as localized, displayable content.
   *  The system will select the first variant that fits the available space.
   *  If the list template does not contain any items (itemCount == 0), then
   *  the template will display an empty view with a title and subtitle to indicate
   *  that the template has no list items.
   *  If the list template is updated to contain items, the empty view will be automatically
   *  removed.
   */
  emptyViewSubtitleVariants?: string[];
  /**
   * Fired when list item is selected.
   * Spinner shows by default.
   * When the returned promise is resolved the spinner will hide.
   * @param item Object with the selected index
   */
  onItemSelect?(item: { index: number }): Promise<void>;

  /**
   * Fired when the back button is pressed
   */
  onBackButtonPressed?(): void;
}

/**
 * A hierarchical list of menu items can be displayed on the CarPlay screen using a list template.
 *
 * The List Template allows navigation apps to present a hierarchical list of menu items. It includes a navigation bar and a list view.
 *
 * The navigation bar includes a title, and up to two (2) leading buttons and two (2) trailing buttons. You can customize the appearance of these buttons with icons or text.
 *
 * Each item in the list view may include an icon, title, subtitle, and an optional disclosure indicator indicating the presence of a submenu. The depth of the menu hierarchy may not exceed 5 levels. Note that some cars limit the total number of items that may be shown in a list.
 */
export class ListTemplate extends Template<ListTemplateConfig> {
  public get type(): string {
    return 'list';
  }

  get eventMap() {
    return {
      backButtonPressed: 'onBackButtonPressed',
    };
  }

  constructor(public config: ListTemplateConfig) {
    super(config);

    CarPlay.emitter.addListener('didSelectListItem', e => {
      if (config.onItemSelect && e.templateId === this.id) {
        const x = config.onItemSelect(e);
        Promise.resolve(x).then(() => CarPlay.bridge.reactToSelectedResult(true));
      }
    });
  }

  public updateSections = (sections: ListSection[]) => {
    return CarPlay.bridge.updateListTemplateSections(this.id, this.parseConfig(sections));
  };

  public updateListTemplateItem = (config: ListItemUpdate) => {
    return CarPlay.bridge.updateListTemplateItem(this.id, this.parseConfig(config));
  };
}
