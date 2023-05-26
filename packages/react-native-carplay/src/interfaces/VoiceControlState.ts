import { ImageSourcePropType } from 'react-native';

export interface VoiceControlState {
  identifier: string;
  image?: ImageSourcePropType;
  repeats: boolean;
  titleVariants: string[];
}
