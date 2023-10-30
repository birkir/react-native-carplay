import { ImageResolvedAssetSource } from 'react-native';
import { NavigationStep } from './NavigationStep';

export type NavigationRoutingInfo = {
  type: 'routingInfo';
  loading?: boolean;
  junctionImage?: ImageResolvedAssetSource;
  nextStep?: NavigationStep;
  distance: number;
  distanceUnits: number;
};

export type NavigationMessageInfo = {
  type: 'messageInfo';
  title: string;
  icon?: ImageResolvedAssetSource;
};

export type NavigationInfo = NavigationRoutingInfo | NavigationMessageInfo;
