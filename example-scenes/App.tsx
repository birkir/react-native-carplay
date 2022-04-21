import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {CarPlay, GridTemplate} from 'react-native-carplay';

export const App = () => {
  const [carPlayConnected, setCarPlayConnected] = useState(CarPlay.connected);

  console.log(carPlayConnected);

  useEffect(() => {
    function onConnect() {
      console.log('connected');
      setCarPlayConnected(true);
    }

    function onDisconnect() {
      console.log('disconnected');
      setCarPlayConnected(false);
    }

    CarPlay.registerOnConnect(onConnect);
    CarPlay.registerOnDisconnect(onDisconnect);

    return () => {
      CarPlay.unregisterOnConnect(onConnect);
      CarPlay.unregisterOnDisconnect(onDisconnect);
    };
  });

  useEffect(() => {
    if (carPlayConnected) {
      const template = new GridTemplate({
        title: 'Hello, World',
        buttons: [],
      });

      CarPlay.setRootTemplate(template);

      console.log('connected');
    }
  }, [carPlayConnected]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello world</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
