import { ColorValue } from 'react-native';

export type ActionType = 'appIcon' | 'back' | 'pan' | 'custom';

export interface Action<T extends ActionType = ActionType> {
  id?: string;
  title?: string;
  icon?: string;
  backgroundColor?: ColorValue;
  visibility?: 'default' | 'persistent' | 'primary';
  enabled?: boolean;
  type?: T;
}

export type HeaderAction = Action<'appIcon' | 'back'>;
