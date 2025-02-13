import { AppRegistry, Platform } from 'react-native';
import { StandAloneCarPlayApp } from './src/CarPlay/StandAloneCarPlayApp';
import { StandAloneAndroidAutoApp, AndroidAutoModule } from './src/AndroidAuto/StandAloneAndroidAutoApp';

if (Platform.OS === 'android') {
  //AppRegistry.registerRunnable('AndroidAuto', AndroidAutoModule);
  //AppRegistry.registerComponent('RNAndroidAutoStandAlone', () => StandAloneAndroidAutoApp);
  // AppRegistry.registerRunnable('androidAuto', AndroidAutoModule);
} else {
  AppRegistry.registerComponent('RNCarPlayStandAlone', () => StandAloneCarPlayApp);
}
