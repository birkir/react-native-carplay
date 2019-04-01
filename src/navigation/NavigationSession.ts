import { CarPlay } from '../CarPlay';
import { Maneuver } from '../interfaces/Maneuver';
import { PauseReason } from '../interfaces/PauseReason';
import { TravelEstimates } from '../interfaces/TravelEstimates';
import { MapTemplate } from '../templates/MapTemplate';
import { Trip } from './Trip';

export class NavigationSession {

  public maneuvers: Maneuver[];

  constructor(public id: string, public trip: Trip, public mapTemplate: MapTemplate) {}

  public updateManeuvers(maneuvers: Maneuver[]) {
    this.maneuvers = maneuvers;

    CarPlay.bridge.updateManeuversNavigationSession(this.id, maneuvers);
  }

  public updateTravelEstimates(maneuverIndex: number, travelEstimates: TravelEstimates) {
    CarPlay.bridge.updateTravelEstimates(this.id, maneuverIndex, travelEstimates);
  }

  public cancel() {
    CarPlay.bridge.cancelNavigationSession(this.id);
  }

  public finish() {
    CarPlay.bridge.finishNavigationSession(this.id);
  }

  public pause(reason: PauseReason, description: string) {
    CarPlay.bridge.pauseNavigationSession(this.id, reason, description);
  }
}
