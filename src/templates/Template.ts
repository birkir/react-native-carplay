import { CarPlay } from '../CarPlay';
import { BarButton } from '../interfaces/BarButton';

const traverse = require('traverse'); // tslint:disable-line no-var-requires
const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource'); // tslint:disable-line no-var-requires

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
   * Show back button
   */
  backButton?: boolean;
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
  public type: string;
  public id: string;
  public eventMap: any;

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
        if (config[callbackName] && e.templateId === this.id) {
          config[callbackName](e);
        }
      });
    });

    if (this.type !== 'map') {
      CarPlay.bridge.createTemplate(this.id, this.parseConfig({ type: this.type, ...config }));
    }
  }

  public parseConfig(config: any) {
    const result = traverse(config).map(function node(x) {
      if (String(this.key).match(/[Ii]mage$/)) {
        this.update(resolveAssetSource(x));
      }
    });
    return JSON.parse(JSON.stringify(result));
  }
}
