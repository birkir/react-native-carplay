import { MapTemplate } from "../templates/MapTemplate";
import { Trip } from "./Trip";

export class NavigationSession {
  constructor(public id: string, public trip: Trip, public mapTemplate: MapTemplate) {}
  public updateManeuvers(maneuvers: any[]) {}
  public updateTravelEstimates(maneuver: any) {}
  public cancelTrip() {}
  public finishTrip() {}
  public pauseTrip(reason: string) {}
}
