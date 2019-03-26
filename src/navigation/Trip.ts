import { CarPlay } from "../CarPlay";

interface RouteChoice {
  additionalInformationVariants: string[];
  selectionSummaryVariants: string[];
  summaryVariants: string[];
}

interface TripPoint {
  latitude: number;
  longitude: number;
}

interface TripConfig {
  id?: string;
  origin: TripPoint;
  destination: TripPoint;
  routeChoices: RouteChoice[];
}

export class Trip {
  public id: string;

  constructor(config: TripConfig) {
    if (config.id) {
      this.id = config.id;
    }

    if (!this.id) {
      this.id = `trip-${Date.now()}-${Math.round(Math.random() * Number.MAX_SAFE_INTEGER)}`;
    }

    CarPlay.bridge.createTrip(config);
  }
}
