import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, SearchTemplate } from 'react-native-carplay';

export function Search({ navigation }) {
  const [query, setQuery] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const searchTemplate = new SearchTemplate({
      async onSearch(q: string) {
        setQuery(q);
        return (
          q && [
            {
              text: q,
              image: require('../images/item.png'),
            },
          ]
        );
      },
      async onItemSelect(e) {
        setSelected(e.index);
      },
      onSearchButtonPressed() {
        // on search button pressed, should display
        // list template with results
        navigation.navigate('List');
      },
    });

    CarPlay.pushTemplate(searchTemplate, true);

    return () => CarPlay.popToRootTemplate(true);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Query: {query}</Text>
      <Text>Selected Index: {selected}</Text>
    </View>
  );
}

Search.navigationOptions = {
  headerTitle: 'Search Template',
};
