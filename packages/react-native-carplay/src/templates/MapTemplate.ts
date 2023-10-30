import { AppRegistry, Platform } from 'react-native';
import { CarPlay } from '../CarPlay';
import { MapButton } from '../interfaces/MapButton';
import { NavigationAlert } from '../interfaces/NavigationAlert';
import { TextConfiguration } from '../interfaces/TextConfiguration';
import { TimeRemainingColor } from '../interfaces/TimeRemainingColor';
import { TravelEstimates } from '../interfaces/TravelEstimates';
import { NavigationSession } from '../navigation/NavigationSession';
import { Trip } from '../navigation/Trip';
import { Template, TemplateConfig } from './Template';
import { ListItem } from '../interfaces/ListItem';
import { Action } from '../interfaces/Action';
import { Header } from '../interfaces/Header';
import { Pane } from '../interfaces/Pane';

export interface MapTemplateConfig extends TemplateConfig {
  /**
   * The background color the map template uses when displaying guidance.
   * @namespace iOS
   */
  guidanceBackgroundColor?: string;
  /**
   * The style that the map template uses when displaying trip estimates during active nagivation.
   * @default dark
   * @namespace iOS
   */
  tripEstimateStyle?: 'dark' | 'light';
  /**
   * Your component to render inside CarPlay/Android Auto
   * Example `component: MyComponent`
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  /**
   * An array of map buttons displayed on the trailing bottom corner of the map template.
   * If the array contains more than three buttons, the map template displays only the first three buttons, ignoring the remaining buttons.
   * @namespace iOS
   * @namespace Android
   */
  mapButtons?: MapButton[];
  /**
   * A Boolean value that indicates whether the navigation bar hides automatically.
   * @namespace iOS
   */
  automaticallyHidesNavigationBar?: boolean;
  /**
   * A Boolean value that tells the system to hide the map buttons when hiding the navigation bar.
   * @namespace iOS
   */
  hidesButtonsWithNavigationBar?: boolean;
  /**
   * A component that holds onto data associated with a template's header.
   * @namespace Android
   */
  header?: Header;
  /**
   * Sets an ItemList to show in a list view along with the map.
   * - To show a marker corresponding to a point of interest represented by a row, set the Place instance via setMetadata. The host will display the PlaceMarker in both the map and the list view as the row becomes visible.
   * - Images of type IMAGE_TYPE_LARGE are not allowed in this template.
   * - Rows are not allowed to have both an image and a place marker.
   * @limit The number of items in the ItemList should be smaller or equal than the limit provided by CONTENT_LIMIT_TYPE_PLACE_LIST. The host will ignore any items over that limit. The list itself cannot be selectable as set via setOnSelectedListener. Each Row can add up to 2 lines of texts via addText and cannot contain a Toggle.
   * @namespace Android
   */
  items?: ListItem[];
  /**
   * Sets the ActionStrip for this template.
   * Unless set with this method, the template will not have an action strip.
   * The Action buttons in Map Based Template are automatically adjusted based on the screen size. On narrow width screen, icon Actions show by default. If no icon specify, showing title Actions instead. On wider width screen, title Actions show by default. If no title specify, showing icon Actions instead.
   * @limit This template allows up to 4 Actions in its ActionStrip. Of the 4 allowed Actions, it can either be a title Action as set via setTitle, or a icon Action as set via setIcon.
   * @namespace Android
   */
  actions?: Action[];
  /**
   * Sets the Pane for this template. getImage for pane will not be shown in MapTemplate.
   * Unless set with this method, the template will not show a pane.
   * @limit The number of items in the Pane should be smaller or equal than the limit provided by CONTENT_LIMIT_TYPE_PANE. The host via addText and cannot contain either a Toggle or a OnClickListener.
   * Up to 2 Actions are allowed in the Pane. Each action's title color can be customized with ForegroundCarColorSpan instances. Any other span is not supported.
   * If none of the header Action, the header title or the action strip have been set on the template, the header is hidden.
   */
  pane?: Pane;
  /**
   * Fired when Alert Action button is pressed
   * @param e Event
   */
  onAlertActionPressed?(e: { secondary?: boolean; primary?: boolean }): void;
  onMapButtonPressed?(e: { id: string; template: string }): void;
  onPanWithDirection?(e: { direction: string }): void;
  onPanBeganWithDirection?(e: { direction: string }): void;
  onPanEndedWithDirection?(e: { direction: string }): void;
  onSelectedPreviewForTrip?(e: { tripId: string; routeIndex: number }): void;
  onDidCancelNavigation?(): void;
  onStartedTrip?(e: { tripId: string; routeIndex: number }): void;
}

/**
 * The Map Template is a control layer that appears as an overlay over the base view and allows you to present user controls.
 *
 * The control layer consists of a navigation bar and map buttons. By default, the navigation bar appears when the user interacts with the app, and disappears after a period of inactivity.
 *
 * The navigation bar includes up to two leading buttons and two trailing buttons. You can customize the appearance of these buttons with icons or text.
 *
 * The control layer may also include up to four map buttons. The map buttons are always shown as icons.
 *
 * Navigation apps enter panning mode, zoom in or out, and perform other functions by responding to user actions on these buttons.
 */
export class MapTemplate extends Template<MapTemplateConfig> {
  public get type(): string {
    return 'map';
  }

  get eventMap() {
    return {
      alertActionPressed: 'onAlertActionPressed',
      mapButtonPressed: 'onMapButtonPressed',
      panWithDirection: 'onPanWithDirection',
      panBeganWithDirection: 'onPanBeganWithDirection',
      panEndedWithDirection: 'onPanEndedWithDirection',
      selectedPreviewForTrip: 'onSelectedPreviewForTrip',
      didCancelNavigation: 'onDidCancelNavigation',
      startedTrip: 'onStartedTrip',
    };
  }

  constructor(public config: MapTemplateConfig) {
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

  /**
   * Begins guidance for a trip.
   *
   * Keep a reference to the navigation session to perform guidance updates.
   * @param trip Trip class instance
   */
  public async startNavigationSession(trip: Trip): Promise<NavigationSession> {
    const res = await CarPlay.bridge.startNavigationSession(this.id, trip.id);
    return new NavigationSession(res.navigationSessionId, trip, this);
  }

  public updateTravelEstimates(
    trip: Trip,
    travelEstimates: TravelEstimates,
    timeRemainingColor: TimeRemainingColor = 0,
  ) {
    if (!travelEstimates.distanceUnits) {
      travelEstimates.distanceUnits = 'kilometers';
    }
    CarPlay.bridge.updateTravelEstimatesForTrip(
      this.id,
      trip.id,
      travelEstimates,
      timeRemainingColor,
    );
  }
  /**
   * Update MapTemplate configuration
   */
  public updateConfig(config: MapTemplateConfig) {
    this.config = config;
    CarPlay.bridge.updateMapTemplateConfig(this.id, this.parseConfig(config));
  }

  public updateMapButtons(mapButtons: MapButton[]) {
    this.config.mapButtons = mapButtons;
    CarPlay.bridge.updateMapTemplateMapButtons(this.id, this.parseConfig(mapButtons));
  }

  /**
   * Hides the display of trip previews.
   */
  public hideTripPreviews() {
    CarPlay.bridge.hideTripPreviews(this.id);
  }

  public showTripPreviews(tripPreviews: Trip[], textConfiguration: TextConfiguration = {}) {
    CarPlay.bridge.showTripPreviews(
      this.id,
      tripPreviews.map(trip => trip.id),
      textConfiguration,
    );
  }

  public showRouteChoicesPreviewForTrip(trip: Trip, textConfiguration: TextConfiguration = {}) {
    CarPlay.bridge.showRouteChoicesPreviewForTrip(this.id, trip.id, textConfiguration);
  }

  public presentNavigationAlert(config: NavigationAlert, animated = true) {
    CarPlay.bridge.presentNavigationAlert(this.id, config, animated);
  }

  public dismissNavigationAlert(animated = true) {
    CarPlay.bridge.dismissNavigationAlert(this.id, animated);
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
