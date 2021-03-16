import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, PointOfInterestTemplate } from 'react-native-carplay';

export function POI() {
  useEffect(() => {
    const template = new PointOfInterestTemplate({
      title: 'Example',
      items: [
        {
          id: 'test',
          location: { latitude: 64.011, longitude: -21.66 },
          title: 'Testing',
          subtitle: 'foobar',
        },
      ],
    });
    CarPlay.pushTemplate(template, false);
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>POI</Text>
    </View>
  );
}

POI.navigationOptions = {
  headerTitle: 'Alert Template',
};
