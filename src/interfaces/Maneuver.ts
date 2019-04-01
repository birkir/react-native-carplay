import { TravelEstimates } from './TravelEstimates';

/**
 * Navigation instructions and distance from the previous maneuver.
 */
export interface Maneuver {
  junctionImage: any;
  initialTravelEstimates: TravelEstimates;
  symbolLight: any;
  symbolDark: any;
  instructionVariants: string[];
}
