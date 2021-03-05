import { TravelEstimates } from './TravelEstimates';

/**
 * Navigation instructions and distance from the previous maneuver.
 */
export interface Maneuver {
  junctionImage?: any;
  initialTravelEstimates?: TravelEstimates;
  symbolImage?: any;
  resizeSymbolImage?: 'primary' | 'secondary';
  // HEX VALUE ie. #FFFFFF
  tintSymbolImage?: string;

  instructionVariants: string[];

  // not yet implemented
  dashboardInstructionVariants?: string[];
  notificationInstructionVariants?: string[];
  // junctionDark?: any;
  // junctionLight?: any;
}
