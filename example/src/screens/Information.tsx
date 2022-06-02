import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, InformationTemplate } from 'react-native-carplay';

export function Information() {
  useEffect(() => {
    const template = new InformationTemplate({
      title: 'Information',
      items: Array.from({ length: 30 }).fill({ title: 'foo', detail: 'bar' }),
      actions: [{ id: 'u', title: 'Update List' }, { id: 'r', title: 'Random #:' }],
      onActionButtonPressed(action) {
        console.log('pressed', action);
        if (action.id == 'u') {
          const numOfItems = Math.floor(Math.random() * 6);
          template.updateInformationTemplateItems(Array.from({ length: numOfItems }).fill({ title: 'foo', detail: 'bar' }));
        }
        else if (action.id == 'r') {
          template.updateInformationTemplateActions([{ id: 'u', title: 'Update List' }, { id: 'r', title: 'Random #:' + Math.floor(Math.random() * 100) }]);
        }
      },
    });

    CarPlay.pushTemplate(template);
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Information</Text>
    </View>
  );
}

Information.navigationOptions = {
  headerTitle: 'Information Template',
};
