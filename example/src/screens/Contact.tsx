import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, ContactTemplate } from 'react-native-carplay';

export function Contact() {
  useEffect(() => {
    const contactTemplate = new ContactTemplate({
      name: 'Birkir',
      subtitle: 'Rafn',
      actions: [{
        id: 'foo',
        phoneOrEmail:'6184900',
        type: 'message',
      }]
    });
    CarPlay.pushTemplate(contactTemplate);

    return () => {}
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TabBar</Text>
    </View>
  )
}

Contact.navigationOptions = {
  headerTitle: 'Contact Template',
};
