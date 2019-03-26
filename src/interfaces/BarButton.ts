export interface BarButtonText {
  /**
   * A text style bar button.
   */
  type: 'text';
  /**
   * The title displayed on the button.
   */
  title: string;
}

export interface BarButtonImage {
  /**
   * An image style bar button.
   */
  type: 'image';
  /**
   * The image displayed on the button.
   *
   * If you provide an animated image, the button displays only the first image in the animation sequence.
   */
  image: null;
}

/**
 * A button in a navigation bar.
 */
export type BarButton =
  | BarButtonText
  | BarButtonImage & {
      /**
       * Button ID
       */
      id: string;
      /**
       * A Boolean value that enables and disables the bar button.
       */
      disabled?: boolean;
    };
