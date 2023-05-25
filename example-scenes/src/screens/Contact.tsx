import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, ContactTemplate } from 'react-native-carplay';

export function Contact() {
  useEffect(() => {
    const contactTemplate = new ContactTemplate({
      name: 'Birkir',
      subtitle: 'Rafn',
      image: require('../images/cat.jpg'),
      actions: [
        {
          id: 'foo',
          phoneOrEmail: '6184900',
          type: 'message',
        },
        {
          id: 'bar',
          type: 'call',
        },
        {
          id: 'baz',
          type: 'directions',
        },
      ],
    });
    CarPlay.pushTemplate(contactTemplate);

    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact</Text>
    </View>
  );
}

Contact.navigationOptions = {
  headerTitle: 'Contact Template',
};
