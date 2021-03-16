import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, AlertTemplate } from 'react-native-carplay';

export function Alert() {
  const [buttonClicked, setButtonClicked] = useState<string>();

  useEffect(() => {
    const template = new AlertTemplate({
      titleVariants: ['Hello world', 'Mega stuff'],
      actions: [
        {
          id: 'ok',
          title: 'Ok',
        },
        {
          id: 'cancel',
          title: 'Cancel',
          style: 'cancel',
        },
        {
          id: 'remove',
          title: 'Remove',
          style: 'destructive',
        },
      ],
      onActionButtonPressed({ id }) {
        setButtonClicked(id);
        if (id === 'remove') {
          CarPlay.dismissTemplate();
        }
      },
    });
    CarPlay.presentTemplate(template);
    return () => {
      CarPlay.dismissTemplate();
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Alert</Text>
      <Text>{`Clicked button: ${buttonClicked}`}</Text>
    </View>
  );
}

Alert.navigationOptions = {
  headerTitle: 'Alert Template',
};
