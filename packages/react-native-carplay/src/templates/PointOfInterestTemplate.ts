import { Template, TemplateConfig } from './Template';
import { ImageSourcePropType } from 'react-native';
import { CarPlay } from '../CarPlay';

export interface PointOfInterestItem {
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
  pinImage?: ImageSourcePropType;
  selectedPinImage?: ImageSourcePropType;
  title: string;
  subtitle?: string;
  summary?: string;
  detailTitle?: string;
  detailSubtitle?: string;
  detailSummary?: string;
  primaryButton?: string;
  secondaryButton?: string;
}

export interface PointOfInterestTemplateConfig extends TemplateConfig {
  title: string;
  items: PointOfInterestItem[];
  onPointOfInterestSelect?(e: PointOfInterestItem): void;
  onChangeMapRegion(e: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }): void;
  onActionButtonPressed?(e: { id: string; templateId: string, item: PointOfInterestItem }): void;
}

export class PointOfInterestTemplate extends Template<PointOfInterestTemplateConfig> {
  public get type(): string {
    return 'poi';
  }

  public setPointsOfInterest = (items: PointOfInterestItem[]) => {
    this.config.items = items;
    return CarPlay.bridge.setPointsOfInterest(this.id, this.parseConfig(items));
  };
  public setPointOfInterestTitle = (title: string) => {
    return CarPlay.bridge.setPointOfInterestTitle(this.id, title);
  };

  get eventMap() {
    return {
      didSelectPointOfInterest: 'onPointOfInterestSelect',
      didChangeMapRegion: 'onChangeMapRegion',
      actionButtonPressed: 'onActionButtonPressed',
    };
  }
}
