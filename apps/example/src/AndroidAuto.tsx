import React from 'react';
import { NativeModules, DeviceEventEmitter, Text, Button, View } from 'react-native';

export function AndroidAutoModule() {
  console.log('RNCP started');

  DeviceEventEmitter.addListener('RNCarPlay.DidConnect', () => {
    NativeModules.RNCarPlay.createTemplate('TestTemplate', { title: 'Test screen 3' });
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
          NativeModules.RNCarPlay.reload();
        }}
      />
    </View>
  );
}
