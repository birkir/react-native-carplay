import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, ListTemplate, TabBarTemplate } from 'react-native-carplay';

export function TabBar() {
  useEffect(() => {
    const template1 = new ListTemplate({
      sections: [
        {
          header: 'Test 1',
          items: [{ text: 'Hello world 1' }, { text: 'Hello world 2' }],
        },
      ],
      title: 'AA',
    });
    const template2 = new ListTemplate({
      sections: [
        {
          header: 'Test 2',
          items: [{ text: 'Hello world 3' }, { text: 'Hello world 4' }],
        },
      ],
      title: 'BB',
    });

    const tabBarTemplate = new TabBarTemplate({
      templates: [template1, template2],
      onTemplateSelect(e: any) {
        console.log('selected', e);
      },
    });

    CarPlay.setRootTemplate(tabBarTemplate);

    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TabBar</Text>
    </View>
  );
}

TabBar.navigationOptions = {
  headerTitle: 'TabBar Template',
};
