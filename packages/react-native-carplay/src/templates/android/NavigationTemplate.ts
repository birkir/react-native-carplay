import { Action } from '../../interfaces/Action';
import { CarColor } from '../../interfaces/CarColor';
import { NavigationInfo } from '../../interfaces/NavigationInfo';
import { TravelEstimates } from '../../interfaces/TravelEstimates';
import {
  AndroidNavigationBaseTemplate,
  AndroidNavigationBaseTemplateConfig,
} from './AndroidNavigationBaseTemplate';

export interface NavigationTemplateConfig extends AndroidNavigationBaseTemplateConfig {
  /**
   * Sets an ActionStrip with a list of template-scoped actions for this template.
   * The Action buttons in Map Based Template are automatically adjusted based on the screen size. On narrow width screen, icon Actions show by default. If no icon specify, showing title Actions instead. On wider width screen, title Actions show by default. If no title specify, showing icon Actions instead.
   * Requirements This template allows up to 4 Actions in its ActionStrip. Of the 4 allowed Actions, it can either be a title Action as set via setTitle, or a icon Action as set via setIcon.
   */
  actions: Action[];
  /**
   * Sets the background color to use for the navigation information.
   * Depending on contrast requirements, capabilities of the vehicle screens, or other factors, the color may be ignored by the host or overridden by the vehicle system.
   */
  backgroundColor?: CarColor;
  /**
   * Sets the TravelEstimate to the final destination.
   */
  travelEstimate?: TravelEstimates;
  /**
   * Sets an ActionStrip with a list of map-control related actions for this template, such as pan or zoom.
   * The host will draw the buttons in an area that is associated with map controls.
   * If the app does not include the PAN button in this ActionStrip, the app will not receive the user input for panning gestures from SurfaceCallback methods, and the host will exit any previously activated pan mode.
   * Requirements This template allows up to 4 Actions in its map ActionStrip. Only Actions with icons set via setIcon are allowed.
   */
  mapButtons?: Action[];
  /**
   * Sets the navigation information to display on the template.
   * Unless set with this method, navigation info won't be displayed on the template.
   */
  navigationInfo?: NavigationInfo;
}

/**
 * A template for showing navigation information.
 * This template has two independent sections which can be updated:
 * - Navigation information such as routing instructions or navigation-related messages.
 * - Travel estimates to the destination.
 */
export class NavigationTemplate extends AndroidNavigationBaseTemplate<NavigationTemplateConfig> {
  public get type(): string {
    return 'navigation';
  }
}
