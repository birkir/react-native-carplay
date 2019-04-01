export enum NavigationAlertActionStyle {
  Default = 0,
  Cancel = 1,
  Destructive = 2,
};

export interface NavigationAlertAction {
  /**
   * The action button's title.
   */
  title: string;
  /**
   * The display style for the action button.
   */
  style?: NavigationAlertActionStyle;
}

/**
 * An alert panel that displays map or navigation related information to the user.
 */
export interface NavigationAlert {
  lightImage?: any;
  darkImage?: any;
  /**
   * An array of title strings.
   */
  titleVariants: string[];
  /**
   * An array of subtitle strings.
   */
  subtitleVariants?: string[];
  /**
   * The primary action, and button, for the navigation alert.
   */
  primaryAction: NavigationAlertAction;
  /**
   * An optional, secondary action (and button) for the navigation alert.
   */
  secondaryAction?: NavigationAlertAction;
  /**
   * The amount of time, in seconds, that the alert is visible.
   */
  duration: number;
}
