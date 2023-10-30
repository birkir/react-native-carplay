import { AppRegistry, Platform } from 'react-native';
import { Template, TemplateConfig } from '../Template';
import { CarPlay } from '../../CarPlay';

export interface AndroidNavigationBaseTemplateConfig extends TemplateConfig {
  /**
   * Your component to render inside Android Auto Map view
   * Example `component: MyComponent`
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;

  onDidShowPanningInterface?(): void;
  onDidDismissPanningInterface?(): void;
}

export class AndroidNavigationBaseTemplate<
  T extends AndroidNavigationBaseTemplateConfig,
> extends Template<T> {
  get eventMap() {
    return {
      didShowPanningInterface: 'onDidShowPanningInterface',
      didDismissPanningInterface: 'onDidDismissPanningInterface',
    };
  }

  constructor(public config: T) {
    super(config);

    if (config.component) {
      AppRegistry.registerComponent(this.id, () => config.component);
    }

    const callbackFn = Platform.select({
      android: ({ error }: { error?: string } = {}) => {
        error && console.error(error);
      },
    });

    CarPlay.bridge.createTemplate(
      this.id,
      this.parseConfig({ type: this.type, ...config, render: true }),
      callbackFn,
    );
  }
}
