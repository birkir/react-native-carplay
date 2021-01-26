import { TravelEstimates } from './TravelEstimates';

/**
 * Navigation instructions and distance from the previous maneuver.
 */
export interface Maneuver {
  junctionImage?: any;
  initialTravelEstimates?: TravelEstimates;
  symbolImage?: any;

  instructionVariants: string[];

  // not yet implemented
  dashboardInstructionVariants?: string[];
  notificationInstructionVariants?: string[];
  // junctionDark?: any;
  // junctionLight?: any;
}
