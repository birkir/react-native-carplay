import React from 'react';
import { Button, NativeModules, Text, View } from 'react-native';
import { CarPlay } from 'react-native-carplay';
import { menuTemplate } from './templates/menu.template';

export function AndroidAutoModule() {
  CarPlay.emitter.addListener('didConnect', () => {
    CarPlay.setRootTemplate(menuTemplate);
  });
  return;
}

export function AndroidAuto() {
  return (
    <View>
      <Text>Hello Android Auto</Text>
      <Button
        title="Reload"
        onPress={() => {
          NativeModules.RNCarPlay.toast('Hello Android Auto', 5000);
        }}
      />
    </View>
  );
}
