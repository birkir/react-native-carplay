interface BarButtonBase {
  /**
   * Button ID
   */
  id: string;
  /**
   * A Boolean value that enables and disables the bar button.
   */
  disabled?: boolean;
}

interface BarButtonText extends BarButtonBase {
  /**
   * A text style bar button.
   */
  type: 'text';
  /**
   * The title displayed on the button.
   */
  title: string;
}

interface BarButtonImage extends BarButtonBase {
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
export type BarButton = BarButtonImage | BarButtonText;
