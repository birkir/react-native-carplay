import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Grid } from './screens/Grid';
import { List } from './screens/List';
import { Map } from './screens/Map';
import { Menu } from './screens/Menu';
import { Search } from './screens/Search';
import { VoiceControl } from './screens/VoiceControl';
import { TabBar } from './screens/TabBar';
import { Contact } from './screens/Contact';
import { ActionSheet } from './screens/ActionSheet';
import { Alert } from './screens/Alert';
import { Information } from './screens/Information';
import { NowPlaying } from './screens/NowPlaying';
import { POI } from './screens/POI';
import { CarPlay } from 'react-native-carplay';
import { NativeEventEmitter, NativeModules, Platform } from 'react-native';

const Stack = createStackNavigator();

export const App = () => {
  const [carPlayConnected, setCarPlayConnected] = useState(CarPlay.connected);

  useEffect(() => {
    function onConnect() {
      setCarPlayConnected(true);
    }

    function onDisconnect() {
      setCarPlayConnected(false);
    }

    const emt = new NativeEventEmitter(NativeModules.RNCarPlay);
    emt.addListener('didConnect', () => {
      console.log('CONNECTED!');
    });

    CarPlay.registerOnConnect(onConnect);
    CarPlay.registerOnDisconnect(onDisconnect);

    return () => {
      CarPlay.unregisterOnConnect(onConnect);
      CarPlay.unregisterOnDisconnect(onDisconnect);
    };
  });

  return carPlayConnected ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="VoiceControl" component={VoiceControl} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="Grid" component={Grid} />
        <Stack.Screen name="ActionSheet" component={ActionSheet} />
        <Stack.Screen name="Alert" component={Alert} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="NowPlaying" component={NowPlaying} />
        <Stack.Screen name="POI" component={POI} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Please connect Car Play and open the test app</Text>
      <Button title="Connected" onPress={() => setCarPlayConnected(true)} />
    </View>
  );
};
