import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, GridTemplate } from 'react-native-carplay';

export function Grid() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const gridTemplate = new GridTemplate({
      trailingNavigationBarButtons: [
        {
          id: 'LEAD_2',
          type: 'image',
          image: require('../images/star.png'),
        },
      ],
      buttons: Array.from({ length: 8 }).map((_, i) => ({
        id: `BUTTON_${i}`,
        image: require('../images/click.png'),
        titleVariants: [`Item ${i}`],
      })),
      title: 'Grid Template',
      onButtonPressed(e) {
        setSelected(e.id);
      },
      onBarButtonPressed(e) {
        setSelected(e.id);
      },
    });

    CarPlay.pushTemplate(gridTemplate, true);
    // CarPlay.setRootTemplate(gridTemplate);

    // return () => { console.log('running') };

    return () => {
      CarPlay.popToRootTemplate(true);
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SELECTED: {selected}</Text>
    </View>
  );
}

Grid.navigationOptions = {
  headerTitle: 'Grid Template',
};
