/**
 * A button representing an action that a map template displays on the CarPlay screen.
 */
export interface MapButton {
  /**
   * Button ID
   */
  id: string;
  /**
   * The image to display on the button.
   */
  image?: any;
  /**
   * The image to display when focus is on the button.
   */
  focusedImage?: any;
  /**
   * A Boolean value that enables and disables the map button.
   */
  disabled?: boolean;
  /**
   * A Boolean value that hides and shows the map button.
   */
  hidden?: boolean;
}
