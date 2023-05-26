import { CarPlay } from '../CarPlay';
import { Maneuver } from '../interfaces/Maneuver';
import { PauseReason } from '../interfaces/PauseReason';
import { TravelEstimates } from '../interfaces/TravelEstimates';
import { MapTemplate } from '../templates/MapTemplate';
import { Trip } from './Trip';
import { Image, processColor } from 'react-native';

export class NavigationSession {
  public maneuvers: Maneuver[] = [];

  constructor(public id: string, public trip: Trip, public mapTemplate: MapTemplate) {}

  public updateManeuvers(maneuvers: Maneuver[]) {
    this.maneuvers = maneuvers;

    CarPlay.bridge.updateManeuversNavigationSession(
      this.id,
      maneuvers.map(maneuver => {
        if (maneuver.symbolImage) {
          maneuver.symbolImage = Image.resolveAssetSource(maneuver.symbolImage);
        }
        if (maneuver.junctionImage) {
          maneuver.junctionImage = Image.resolveAssetSource(maneuver.junctionImage);
        }
        if (maneuver.tintSymbolImage && typeof maneuver.tintSymbolImage === 'string') {
          maneuver.tintSymbolImage = processColor(maneuver.tintSymbolImage);
        }
        return maneuver;
      }),
    );
  }

  public updateTravelEstimates(maneuverIndex: number, travelEstimates: TravelEstimates) {
    if (!travelEstimates.distanceUnits) {
      travelEstimates.distanceUnits = 'kilometers';
    }
    CarPlay.bridge.updateTravelEstimatesNavigationSession(this.id, maneuverIndex, travelEstimates);
  }

  public cancel() {
    CarPlay.bridge.cancelNavigationSession(this.id);
  }

  public finish() {
    CarPlay.bridge.finishNavigationSession(this.id);
  }

  public pause(reason: PauseReason, description?: string) {
    CarPlay.bridge.pauseNavigationSession(this.id, reason, description);
  }
}
