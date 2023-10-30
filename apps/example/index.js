import { AppRegistry, Platform, Text } from 'react-native';
import { App } from './src/App';
import { AndroidAuto, RealAndroidAuto, AndroidAutoModule } from './src/AndroidAuto';

if (Platform.OS === 'android') {
  AppRegistry.registerRunnable('AndroidAuto', AndroidAutoModule);
  AppRegistry.registerComponent('RNCarPlayScene', () => AndroidAuto);
  // AppRegistry.registerRunnable('androidAuto', AndroidAutoModule);
} else {
  AppRegistry.registerComponent('RNCarPlayScene', () => App);
}
