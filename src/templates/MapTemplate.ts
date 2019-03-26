import { CarPlay } from '../CarPlay';
import { MapButton } from '../interfaces/MapButton';
import { TextConfiguration } from '../interfaces/TextConfiguration';
import { TimeRemainingColor } from '../interfaces/TimeRemainingColor';
import { Trip } from '../navigation/Trip';
import { Template } from './Template';

interface MapTemplateConfig {
  guidanceBackgroundColor?: string;
  tripEstimateStyle?: 'dark' | 'light';
  /**
   * Your react module name
   * Example `MODULE_NAME` from `AppRegistry.registerComponent('MODULE_NAME', () => YourComponent);`
   */
  moduleName: string;
  /**
   * An array of map buttons displayed on the trailing bottom corner of the map template.
   *
   * If the array contains more than three buttons, the map template displays only the first three buttons, ignoring the remaining buttons.
   */
  mapButtons: MapButton[];
  /**
   * A Boolean value that indicates whether the navigation bar hides automatically.
   */
  automaticallyHidesNavigationBar: boolean;
  /**
   * A Boolean value that tells the system to hide the map buttons when hiding the navigation bar.
   */
  hidesButtonsWithNavigationBar: boolean;
}

export class MapTemplate extends Template<MapTemplateConfig> {
  get type() {
    return 'map';
  }

  public updateTravelEstimates(tripId: string, distanceRemaining: number, timeRemaining: number, timeRemainingColor: TimeRemainingColor = 'default') {
    CarPlay.bridge.updateTravelEstimates(this.id, tripId, distanceRemaining, timeRemaining, timeRemainingColor);
  }

  /**
   * Update MapTemplate configuration
   */
  public updateConfig(config: MapTemplateConfig) {
    CarPlay.bridge.updateMapTemplateConfig(this.id, this.parseConfig(config));
  }

  /**
   * Hides the display of trip previews.
   */
  public hideTripPreviews() {
    CarPlay.bridge.hideTripPreviews(this.id);
  }

  public showTripPreviews(tripPreviews: Trip[], textConfiguration: TextConfiguration = {}) {
    CarPlay.bridge.showTripPreviews(this.id, tripPreviews, textConfiguration);
  }

  public showRouteChoicesPreviewForTrip(tripPreviews: Trip[], textConfiguration: TextConfiguration = {}) {
    CarPlay.bridge.showRouteChoicesPreviewForTrip(this.id, tripPreviews, textConfiguration);
  }

  /**
   * Shows the panning interface over the map.
   *
   * Calling this method while displaying the panning interface has no effect.
   *
   * While showing the panning interface, the system hides all map buttons. The system doesn't provide a button to dismiss the panning interface. Instead, you must provide a map button in the navigation bar that the user taps to dismiss the panning interface.
   * @param animated A Boolean value that determines whether to animate the panning interface.
   */
  public showPanningInterface(animated = false) {
    CarPlay.bridge.showPanningInterface(this.id, animated);
  }

  /**
   * Dismisses the panning interface.
   *
   * When dismissing the panning interface, the system shows the previously hidden map buttons.
   * @param animated A Boolean value that determines whether to animate the dismissal of the panning interface.
   */
  public dismissPanningInterface(animated = false) {
    CarPlay.bridge.dismissPanningInterface(this.id, animated);
  }
}
