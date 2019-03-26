/**
 * A menu item button displayed on a grid template.
 */
export interface GridButton {
  /**
   * Button ID
   */
  id: string;
  /**
   * An array of title variants for the button.
   *
   * When the system displays the button, it selects the title that best fits the available screen space, so arrange the titles from most to least preferred when creating a grid button. Also, localize each title for display to the user, and be sure to include at least one title in the array.
   */
  titleVariants: string[];
  /**
   * The image displayed on the button.
   *
   * When creating a grid button, don't provide an animated image. If you do, the button uses the first image in the animation sequence.
   */
  image?: null;
}
