import { CarPlay } from '../CarPlay';
import { Template, TemplateConfig } from './Template';
import { Image } from 'react-native';


interface PoiAction {
  id: string;
  title: string;
}

export interface PointOfInterestItem {
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
  title: string;
  subtitle?: string;
  summary?: string;
  detailTitle?: string;
  detailSubtitle?: string;
  detailSummary?: string;
  image?: any;
  actions: PoiAction[];
}

export interface PointOfInterestTemplateConfig extends TemplateConfig {
  title: string;
  items: PointOfInterestItem[];
  onMapRegionChanged( e: {
    templateId: string;
    latitudeCenter: number;
	  longitudeCenter: number;
	  latitudeDelta: number;
	  longitudeDelta: number;
  }): void;
  onPoiButtonPressed(e: { id: string; templateId: string; poi: PointOfInterestItem }): void;
  onDidSelectPointOfInterest(e: PointOfInterestItem): void;
}

export class PointOfInterestTemplate extends Template<PointOfInterestTemplateConfig> {
  constructor(public config: PointOfInterestTemplateConfig) {
      super(config);
      this.config = config;
  }

  // public updateTemplates = (config: PointOfInterestTemplateConfig) => {
  //   return CarPlay.bridge.updatePoiTemplates(this.id, this.parseConfig(config));
  // };
  
  public get type(): string {
    return 'poi';
  }

  get eventMap() {
    return {
      mapRegionChanged: 'onMapRegionChanged',
      poiButtonPressed: 'onPoiButtonPressed',
      didSelectPointOfInterest: 'onDidSelectPointOfInterest'
    };
  }
}

