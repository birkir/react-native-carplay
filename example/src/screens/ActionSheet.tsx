import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, ActionSheetTemplate } from 'react-native-carplay';

export function ActionSheet() {
  useEffect(() => {
    const template = new ActionSheetTemplate({
      title: 'Example',
      message: 'This is an message for you',
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
    return () => {}
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Action Sheet</Text>
    </View>
  )
}

ActionSheet.navigationOptions = {
  headerTitle: 'Action Sheet Template',
};
