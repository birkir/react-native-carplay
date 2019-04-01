import { CarPlay } from '../CarPlay';
import { ListSection } from '../interfaces/ListSection';
import { Template, TemplateConfig } from './Template';

interface ListTemplateConfig extends TemplateConfig {
  /**
   * The title displayed in the navigation bar while the list template is visible.
   */
  title?: string;
  /**
   * The sections displayed in the list.
   */
  sections: ListSection[];
  /**
   * Fired when list item is selected.
   * Spinner shows by default.
   * When the returned promise is resolved the spinner will hide.
   * @param item Object with the selected index
   */
  onItemSelect?(item: any): Promise<void>;
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
  get type() {
    return 'list';
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

  public updateSections = sections => {
    return CarPlay.bridge.updateListTemplateSections(this.id, this.parseConfig(sections));
  };
}
