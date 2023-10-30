import { ImageResolvedAssetSource } from 'react-native';

export type NavigationStep = {
  lane: {
    shape: number;
    recommended: boolean;
  };
  cue?: string;
  lanesImage: ImageResolvedAssetSource;
  maneuver?: {
    type: number;
    icon: ImageResolvedAssetSource;
    roundaboutExitAngle: number;
    roundaboutExitNumber: number;
  };
  road?: string;
};
