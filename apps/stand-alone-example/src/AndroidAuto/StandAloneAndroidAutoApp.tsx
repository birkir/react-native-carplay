import React from 'react';
import { Button, Text, View } from 'react-native';
import { CarPlay } from 'react-native-carplay';

export function AndroidAutoModule() {
  CarPlay.emitter.addListener('didConnect', () => {
    CarPlay.setRootTemplate(menuTemplate);
  });
  CarPlay.emitter.addListener('backButtonPressed', () => {
    CarPlay.popTemplate();
  });
  return;
}

export function StandAloneAndroidAutoApp() {
  return (
    <View>
      <Text>Hello Android Auto</Text>
      <Button
        title="Reload"
        onPress={() => {
          CarPlay.bridge.reload();
        }}
      />
    </View>
  );
}
