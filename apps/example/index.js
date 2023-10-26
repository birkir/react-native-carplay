import { AppRegistry, Platform } from 'react-native';
import { App } from './src/App';
import { AndroidAuto } from './src/AndroidAuto';

if (Platform.OS === 'android') {
  AppRegistry.registerComponent('RNCarPlayScene', () => AndroidAuto);
} else {
  AppRegistry.registerComponent('RNCarPlayScene', () => App);
}
