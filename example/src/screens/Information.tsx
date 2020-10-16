import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, InformationTemplate } from 'react-native-carplay';

export function Information() {
  useEffect(() => {
    const template = new InformationTemplate({
      title: 'Information',
      items: Array.from({ length: 30}).fill({ title: 'foo', detail: 'bar' }),
      actions: [{ id: 'x', title: 'demo' }],
      onActionButtonPressed(e){
        console.log('pressed', e);
      }
    });

    CarPlay.pushTemplate(template);
    return () => {}
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Information</Text>
    </View>
  )
}

Information.navigationOptions = {
  headerTitle: 'Information Template',
};
