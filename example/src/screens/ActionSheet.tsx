import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, ActionSheetTemplate } from 'react-native-carplay';

export function ActionSheet({ navigation }) {
  useEffect(() => {
    const template = new ActionSheetTemplate({
      title: 'Example',
      message: 'This is an message for you',
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
      onActionButtonPressed(e) {
        navigation.navigate('Menu');
      },
    });
    CarPlay.presentTemplate(template);
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Action Sheet</Text>
    </View>
  );
}

ActionSheet.navigationOptions = {
  headerTitle: 'Action Sheet Template',
};
