import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, ListTemplate } from 'react-native-carplay';

const sections = Array.from({ length: 26 })
.map((_, i) => ({
  header: `Header ${String.fromCharCode(97 + i).toLocaleUpperCase()}`,
  items: Array.from({ length: 3 }).map((_, j) => ({
    text: `Item ${j + 1}`,
  })),
  sectionIndexTitle: String.fromCharCode(97 + i).toLocaleUpperCase()
}));

export function List() {

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const listTemplate = new ListTemplate({
      sections,
      title: 'List Template',
      async onItemSelect(e) {
        const { index } = e;
        setSelected(index);
        return;
      }
    });

    CarPlay.pushTemplate(listTemplate, true);

    return () => CarPlay.popToRootTemplate(true);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SELECTED: {selected}</Text>
    </View>
  )
}

List.navigationOptions = {
  headerTitle: 'List Template',
};
