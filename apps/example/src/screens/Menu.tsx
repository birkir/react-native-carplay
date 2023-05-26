import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { CarPlay, GridTemplate } from 'react-native-carplay';

const gridItemImage = require('../images/go.png');

export function Menu({ navigation }: any) {
  useEffect(() => {
    const gridTemplate = new GridTemplate({
      buttons: [
        {
          id: 'List',
          titleVariants: ['List'],
          image: gridItemImage,
        },
        {
          id: 'Grid',
          titleVariants: ['Grid'],
          image: gridItemImage,
        },
        {
          id: 'Map',
          titleVariants: ['Map'],
          image: gridItemImage,
        },
        {
          id: 'Search',
          titleVariants: ['Search'],
          image: gridItemImage,
        },
        {
          id: 'Information',
          titleVariants: ['Information'],
          image: gridItemImage,
        },
        {
          id: 'VoiceControl',
          titleVariants: ['Voice'],
          image: gridItemImage,
        },
        {
          id: 'Alert',
          titleVariants: ['Alert'],
          image: gridItemImage,
        },
        {
          id: 'ActionSheet',
          titleVariants: ['ActionSheet'],
          image: gridItemImage,
        },
      ],
      onButtonPressed: ({ id }) => {
        navigation.navigate(id);
      },
      onWillAppear: () => {
        navigation.navigate('Menu');
      },
      title: 'Hello, world',
    });

    CarPlay.setRootTemplate(gridTemplate);
  }, []);

  const onTabBarPress = () => navigation.navigate('TabBar');
  const onListPress = () => navigation.navigate('List');
  const onGridPress = () => navigation.navigate('Grid');
  const onMapPress = () => navigation.navigate('Map');
  const onSearchPress = () => navigation.navigate('Search');
  const onVoiceControlPress = () => navigation.navigate('VoiceControl');
  const onContactPress = () => navigation.navigate('Contact');
  const onActionSheetPress = () => navigation.navigate('ActionSheet');
  const onAlertPress = () => navigation.navigate('Alert');
  const onInformationPress = () => navigation.navigate('Information');
  const onNowPlayingPress = () => navigation.navigate('NowPlaying');
  const onPOIPress = () => navigation.navigate('POI');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="List" onPress={onListPress} />
      <Button title="Grid" onPress={onGridPress} />
      <Button title="Map" onPress={onMapPress} />
      <Button title="Search" onPress={onSearchPress} />
      <Button title="Voice Control" onPress={onVoiceControlPress} />
      <Button title="Action Sheet" onPress={onActionSheetPress} />
      <Button title="Alert" onPress={onAlertPress} />
      <Button title="Information" onPress={onInformationPress} />
      <Button
        title="TabBar (Will overwrite root template)"
        onPress={onTabBarPress}
      />
      <Button title="Contact" onPress={onContactPress} />
      <Button title="Now Playing" onPress={onNowPlayingPress} />
      <Button title="Point Of Interest" onPress={onPOIPress} />
    </View>
  );
}

Menu.navigationOptions = {
  headerTitle: 'Car Play Example',
};
