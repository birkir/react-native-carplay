import { ColorValue } from 'react-native';

type ActionType = 'appIcon' | 'back' | 'composeMessage' | 'pan' | 'custom';

export interface Action<T extends ActionType> {
  id: string;
  title: string;
  icon?: string;
  backgroundColor?: ColorValue;
  visibility?: 'default' | 'persistent' | 'primary';
  enabled?: boolean;
  type?: T;
}
