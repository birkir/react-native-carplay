import { ImageSourcePropType } from 'react-native';
import { CarPlay } from '../CarPlay';
import { BarButton } from '../interfaces/BarButton';

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

export interface BaseEvent {
  /**
   * Template id that fired the event
   */
  templateId: string;
}

interface BarButtonEvent extends BaseEvent {
  id: string;
}

export interface TemplateConfig {
  /**
   * Give the template your own ID. Must be unique.
   */
  id?: string;
  /**
   * An array of bar buttons to display on the leading side of the navigation bar.
   *
   * The navigation bar displays up to two buttons in the leading space. When including more than two buttons in the array, the system displays only the first two buttons.
   */
  leadingNavigationBarButtons?: BarButton[];
  /**
   * An array of bar buttons to display on the trailing side of the navigation bar.
   *
   * The navigation bar displays up to two buttons in the trailing space. When including more than two buttons in the array, the system displays only the first two buttons.
   */
  trailingNavigationBarButtons?: BarButton[];
  /**
   * UITabBarSystemItem
   */
  tabSystemItem?: number;
  /**
   * Name of system image for tab
   */
  tabSystemImageName?: string;
  /**
   * Image source for tab
   */
  tabImage?: ImageSourcePropType;
  /**
   * Set tab title
   */
  tabTitle?: string;
  /**
   * Fired before template appears
   * @param e Event
   */
  onWillAppear?(e: BaseEvent): void;
  /**
   * Fired before template disappears
   * @param e Event
   */
  onWillDisappear?(e: BaseEvent): void;
  /**
   * Fired after template appears
   * @param e Event
   */
  onDidAppear?(e: BaseEvent): void;
  /**
   * Fired after template disappears
   * @param e Event
   */
  onDidDisappear?(e: BaseEvent): void;

  /**
   * Fired when bar button is pressed
   * @param e Event
   */
  onBarButtonPressed?(e: BarButtonEvent): void;
}

export class Template<P> {
  public get type(): string {
    return 'unset';
  }
  public id!: string;

  public get eventMap() {
    return {};
  }

  constructor(public config: TemplateConfig & P) {
    if (config.id) {
      this.id = config.id;
    }

    if (!this.id) {
      this.id = `${this.type}-${Date.now()}-${Math.round(Math.random() * Number.MAX_SAFE_INTEGER)}`;
    }

    const eventMap = {
      barButtonPressed: 'onBarButtonPressed',
      didAppear: 'onDidAppear',
      didDisappear: 'onDidDisappear',
      willAppear: 'onWillAppear',
      willDisappear: 'onWillDisappear',
      ...(this.eventMap || {}),
    };

    Object.entries(eventMap).forEach(([eventName, callbackName]: any) => {
      CarPlay.emitter.addListener(eventName, e => {
        const configEventName = callbackName as keyof Pick<
          TemplateConfig,
          | 'onWillAppear'
          | 'onWillDisappear'
          | 'onDidAppear'
          | 'onDidDisappear'
          | 'onBarButtonPressed'
        >;
        if (config[configEventName] && e.templateId === this.id) {
          config[configEventName]?.(e);
        }
      });
    });

    if (this.type !== 'map') {
      CarPlay.bridge.createTemplate(this.id, this.parseConfig({ type: this.type, ...config }));
    }
  }

  public parseConfig(config: any) {
    function traverse(obj: any) {
      for (const i in obj) {
        if (obj[i] !== null && typeof obj[i] === 'object') {
          traverse(obj[i]);
        }
        if (String(i).match(/[Ii]mage$/)) {
          obj[i] = resolveAssetSource(obj[i]);
        }
      }
    }
    const result = JSON.parse(JSON.stringify(config));
    traverse(result);
    return result;
  }
}
