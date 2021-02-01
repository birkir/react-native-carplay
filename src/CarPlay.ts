import { NativeEventEmitter, NativeModules } from 'react-native';
import { ActionSheetTemplate } from './templates/ActionSheetTemplate';
import { AlertTemplate } from './templates/AlertTemplate';
import { ContactTemplate } from './templates/ContactTemplate';
import { GridTemplate } from './templates/GridTemplate';
import { InformationTemplate } from './templates/InformationTemplate';
import { ListTemplate } from './templates/ListTemplate';
import { MapTemplate } from './templates/MapTemplate';
import { PointOfInterestTemplate } from './templates/PointOfInterestTemplate';
import { SearchTemplate } from './templates/SearchTemplate';
import { VoiceControlTemplate } from './templates/VoiceControlTemplate';

const { RNCarPlay } = NativeModules;

type PushableTemplates =
  | MapTemplate
  | SearchTemplate
  | GridTemplate
  | PointOfInterestTemplate
  | ListTemplate
  | InformationTemplate
  | ContactTemplate;
type PresentableTemplates = AlertTemplate | ActionSheetTemplate | VoiceControlTemplate;

/**
 * A controller that manages all user interface elements appearing on your map displayed on the CarPlay screen.
 */
class CarPlayInterface {
  /**
   * React Native bridge to the CarPlay interface
   */
  public bridge = RNCarPlay;

  public connected = false;

  /**
   * CarPlay Event Emitter
   */
  public emitter = new NativeEventEmitter(RNCarPlay);

  private onConnectCallback: () => void;
  private onDisconnectCallback: () => void;

  constructor() {
    this.emitter.addListener('didConnect', () => {
      this.connected = true;
      if (this.onConnectCallback) {
        this.onConnectCallback();
      }
    });
    this.emitter.addListener('didDisconnect', () => {
      this.connected = false;
      if (this.onDisconnectCallback) {
        this.onDisconnectCallback();
      }
    });
  }

  /**
   * Fired when CarPlay is connected to the device.
   */
  public onConnect = (callback: () => void) => {
    this.onConnectCallback = callback;
  };

  /**
   * Fired when CarPlay is disconnected from the device.
   */
  public onDisconnect = (callback: () => void) => {
    this.onDisconnectCallback = callback;
  };

  /**
   * Sets the root template, starting a new stack for the template navigation hierarchy.
   * @param rootTemplate The root template. Replaces the current rootTemplate, if one exists.
   * @param animated Set TRUE to animate the presentation of the root template; ignored if there isn't a current rootTemplate.
   */
  public setRootTemplate(rootTemplate: PushableTemplates, animated = true) {
    return this.bridge.setRootTemplate(rootTemplate.id, animated);
  }

  /**
   * Pushes a template onto the navigation stack and updates the display.
   * @param templateToPush The template to push onto the navigation stack.
   * @param animated Set TRUE to animate the presentation of the template.
   */
  public pushTemplate(templateToPush: PushableTemplates, animated = true) {
    return this.bridge.pushTemplate(templateToPush.id, animated);
  }

  /**
   * Pops templates until the specified template is at the top of the navigation stack.
   * @param targetTemplate The template that you want at the top of the stack. The template must be on the navigation stack before calling this method.
   * @param animated A Boolean value that indicates whether the system animates the display of transitioning templates.
   */
  public popToTemplate(targetTemplate: PushableTemplates, animated = true) {
    return this.bridge.popToTemplate(targetTemplate.id, animated);
  }

  /**
   * Pops all templates on the stack—except the root template—and updates the display.
   * @param animated A Boolean value that indicates whether the system animates the display of transitioning templates.
   */
  public popToRootTemplate(animated = true) {
    return this.bridge.popToRootTemplate(animated);
  }

  /**
   * Pops the top template from the navigation stack and updates the display.
   * @param animated A Boolean value that indicates whether the system animates the display of transitioning templates.
   */
  public popTemplate(animated = true) {
    return this.bridge.popTemplate(animated);
  }

  /**
   * @todo Not implemented yet
   */
  public presentTemplate(templateToPresent: PresentableTemplates, animated = true) {
    return this.bridge.presentTemplate(templateToPresent.id, animated);
  }

  /**
   * @todo Not implemented yet
   */
  public dismissTemplate(animated = true) {
    return this.bridge.dismissTemplate(animated);
  }

  /**
   * The current root template in the template navigation hierarchy.
   * @todo Not implemented yet
   */
  public get rootTemplate(): Promise<string> {
    return Promise.resolve('');
  }

  /**
   * The top-most template in the navigation hierarchy stack.
   * @todo Not implemented yet
   */
  public get topTemplate(): Promise<string> {
    return Promise.resolve('');
  }
}

export const CarPlay = new CarPlayInterface();
