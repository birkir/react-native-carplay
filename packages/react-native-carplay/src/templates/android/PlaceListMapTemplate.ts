import { Action, HeaderAction } from '../../interfaces/Action';
import {
  AndroidNavigationBaseTemplate,
  AndroidNavigationBaseTemplateConfig,
} from './AndroidNavigationBaseTemplate';
import { Place } from '../../interfaces/Place';
import { ListItem } from '../../interfaces/ListItem';

export interface PlaceListMapTemplateConfig extends AndroidNavigationBaseTemplateConfig {
  /**
   * Sets an ActionStrip with a list of template-scoped actions for this template.
   * The Action buttons in Map Based Template are automatically adjusted based on the screen size. On narrow width screen, icon Actions show by default. If no icon specify, showing title Actions instead. On wider width screen, title Actions show by default. If no title specify, showing icon Actions instead.
   * @limit This template allows up to 4 Actions in its ActionStrip. Of the 4 allowed Actions, it can either be a title Action as set via setTitle, or a icon Action as set via setIcon.
   */
  actions?: Action[];
  /**
   * Sets the anchor maker on the map.
   * An anchor marker will not be displayed unless set with this method.
   * The anchor marker is displayed differently from other markers by the host.
   * If not null, an anchor marker will be shown at the specified CarLocation on the map. The camera will adapt to always have the anchor marker visible within its viewport, along with other places' markers from Row that are currently visible in the Pane. This can be used to provide a reference point on the map (e.g. the center of a search region) as the user pages through the Pane's markers, for example.
   */
  anchor?: Place;
  /**
   * Sets whether to show the current location in the map.
   * The map template will show the user's current location on the map.
   * This functionality requires the app to have either the ACCESS_FINE_LOCATION or ACCESS_COARSE_LOCATION permission. When isEnabled is true, the host may receive location updates from the app in order to show the user's current location.
   */
  currentLocationEnabled?: boolean;
  /**
   * Sets the Action that will be displayed in the header of the template.
   * Unless set with this method, the template will not have a header action.
   * @limit This template only supports either one of APP_ICON and BACK as a header Action.
   */
  headerAction?: HeaderAction;
  /**
   * Sets an ItemList to show in a list view along with the map.
   * Unless set with this method, the template will not show an item list.
   * To show a marker corresponding to a point of interest represented by a row, set the Place instance via setMetadata. The host will display the PlaceMarker in both the map and the list view as the row becomes visible.
   * @limit The number of items in the ItemList should be smaller or equal than the limit provided by CONTENT_LIMIT_TYPE_PLACE_LIST. The host will ignore any items over that limit. The list itself cannot be selectable as set via setOnSelectedListener. Each Row can add up to 2 lines of texts via addText and cannot contain a Toggle.
   */
  itemList?: ListItem[];
  /**
   * Sets whether the template is in a loading state.
   */
  loading?: boolean;
  /**
   * Title for the map
   */
  title?: string;
}

/**
 * A template that displays a map along with a list of places.
 * The map can display markers corresponding to the places in the list. See setItemList for details.
 * Template Restrictions In regards to template refreshes, as described in onGetTemplate, this template is considered a refresh of a previous one if:
 * - The previous template is in a loading state (see setLoading, or
 * - The template title has not changed, and the number of rows and the title (not counting spans) of each row between the previous and new ItemLists have not changed.
 * - The template is sent in response to a user-initiated content refresh request. (see setOnContentRefreshListener.
 */
export class PlaceListMapTemplate extends AndroidNavigationBaseTemplate<PlaceListMapTemplateConfig> {
  public get type(): string {
    return 'place-list-map';
  }
}
