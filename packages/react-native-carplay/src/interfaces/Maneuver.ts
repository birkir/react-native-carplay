import { TravelEstimates } from './TravelEstimates';
import { ColorValue, ImageSourcePropType, ProcessedColorValue } from 'react-native';

/**
 * Navigation instructions and distance from the previous maneuver.
 */
export interface Maneuver {
  junctionImage?: ImageSourcePropType;
  initialTravelEstimates?: TravelEstimates;
  symbolImage?: ImageSourcePropType;
  /**
   * Allows the supplied symbol image to be resized
   * to the suitable scal for it's use as a primary
   * or secondary image. This functionality would usually
   * be available via the `<Image>` tag but carplay
   * requires an image asset, so this resizing is done
   * on the native side.
   */
  resizeSymbolImage?: 'primary' | 'secondary';
  /**
   * Allows the supplied symbol image to be tinted
   * via a color, ie. 'red'. This functionality would usually
   * be available via the `<Image>` tag but carplay requires
   * an image asset to this tinting is done on the native side.
   * If a string is supplied, it will be passed to `processColor`.
   * You may also use `processColor` yourself.
   */
  tintSymbolImage?: null | number | ColorValue | ProcessedColorValue;
  instructionVariants: string[];

  // not yet implemented
  dashboardInstructionVariants?: string[];
  notificationInstructionVariants?: string[];
}
