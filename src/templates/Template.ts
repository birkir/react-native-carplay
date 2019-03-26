import { CarPlay } from '../CarPlay';
import { BarButton } from '../interfaces/BarButton';

const traverse = require('traverse'); // tslint:disable-line no-var-requires
const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource'); // tslint:disable-line no-var-requires

interface BaseEvent {
  templateId: string;
}

export interface TemplateConfig {
  id?: string;
  backButton: boolean;
  leadingNavigationBarButtons: BarButton[];
  trailingNavigationBarButtons: BarButton[];
  willAppear(e: BaseEvent): void;
  willDisappear(e: BaseEvent): void;
  didAppear(e: BaseEvent): void;
  didDisappear(e: BaseEvent): void;
}

export class Template<P> {
  public type: string;
  public id: string;

  constructor(config: TemplateConfig & P) {
    if (config.id) {
      this.id = config.id;
    }

    if (!this.id) {
      this.id = `${this.type}-${Date.now()}-${Math.round(Math.random() * Number.MAX_SAFE_INTEGER)}`;
    }

    const events = ['willAppear', 'didAppear', 'willDisappear', 'willDisappear'];
    events.forEach(eventName => {
      CarPlay.emitter.addListener(eventName, e => {
        if (config[eventName] && e.templateId === this.id) {
          config[eventName](e);
        }
      });
    });

    CarPlay.bridge.createTemplate(this.id, this.parseConfig({ type: this.type, ...config }));
  }

  public parseConfig(config: any) {
    const result = traverse(config).map(function node(x) {
      if (this.key === 'image') {
        this.update(resolveAssetSource(x));
      }
    });
    return JSON.parse(JSON.stringify(result));
  }
}
