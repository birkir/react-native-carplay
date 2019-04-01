import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, SearchTemplate } from 'react-native-carplay';

export function Search({ navigation }) {

  const [query, setQuery] = useState(null);
  const [selected, setSelected] = useState(null);
  const [buttonPress, setButtonPress] = useState(false);

  useEffect(() => {
    const searchTemplate = new SearchTemplate({
      async onSearch(q: string) {
        setQuery(q);
        await new Promise(r => setTimeout(r, 500));
        return [{
          text: q,
        }];
      },
      async onItemSelect(e) {
        await new Promise(r => setTimeout(r, 500));
        setSelected(e.index);
        return;
      },
      onSearchButtonPressed() {
        setButtonPress(true);
      },
      onDidDisappear() {
        navigation.popToTop();
      }
    });

    CarPlay.pushTemplate(searchTemplate, true);

    return () => CarPlay.popToRootTemplate(true);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Query: {query}</Text>
      <Text>Selected Index: {selected}</Text>
      <Text>Button Pressed? {buttonPress ? 'YES':'NO'}</Text>
    </View>
  )
}

Search.navigationOptions = {
  headerTitle: 'Search Template',
};
