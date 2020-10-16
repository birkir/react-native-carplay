import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, AlertTemplate } from 'react-native-carplay';

export function Alert() {
  useEffect(() => {
    const template = new AlertTemplate({
      titleVariants: ['Hello world', 'Mega stuff'],
      actions: [{
        id: 'ok',
        title: 'Ok'
      },{
        id: 'cancel',
        title: 'Cancel',
        style: 'cancel'
      }, {
        id: 'remove',
        title: 'Remove',
        style: 'destructive',
      }],
      onActionButtonPressed(e) {
        console.log('e', e);
      }
    });
    CarPlay.presentTemplate(template);
    return () => {
      CarPlay.dismissTemplate();
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Alert</Text>
    </View>
  )
}

Alert.navigationOptions = {
  headerTitle: 'Alert Template',
};
