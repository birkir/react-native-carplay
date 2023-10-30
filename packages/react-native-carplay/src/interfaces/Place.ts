import { ImageSourcePropType } from 'react-native';

/**
 * A place to be displayed on the map.
 * @namespace Android
 */
export interface Place {
  latitude: number;
  longitude: number;
  // Marker icon on the map
  icon: ImageSourcePropType;
}
