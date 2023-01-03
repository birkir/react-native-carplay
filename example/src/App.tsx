import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabBar } from './screens/TabBar';
import { NowPlaying } from './screens/NowPlaying';
import { CarPlay } from 'react-native-carplay';
import { Part } from './types/content';

export type RootStackParamList = {
  TabBar: undefined;
  NowPlaying: { article: Part }
}

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  const [carPlayConnected, setCarPlayConnected] = useState(CarPlay.connected);

  useEffect(() => {
    function onConnect() {
      setCarPlayConnected(true);
    }

    function onDisconnect() {
      setCarPlayConnected(false);
    }

    CarPlay.registerOnConnect(onConnect);
    CarPlay.registerOnDisconnect(onDisconnect);

    return () => {
      CarPlay.unregisterOnConnect(onConnect);
      CarPlay.unregisterOnDisconnect(onDisconnect);
    };
  });

  return carPlayConnected ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabBar">
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="NowPlaying" component={NowPlaying} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Please connect Car Play and open the test app</Text>
    </View>
  );
};
