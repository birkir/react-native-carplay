import React, { useEffect } from 'react';
import { View } from 'react-native';
import { CarPlay, GridTemplate } from 'react-native-carplay';
import { MenuButton } from '../components/MenuButton';

export function Menu({ navigation }) {

  useEffect(() => {
    const helloWorld = new GridTemplate({
      buttons: [],
      title: 'Hello world',
    });

    CarPlay.setRootTemplate(helloWorld);
  }, []);

  const onListPress = () => navigation.navigate('List');
  const onGridPress = () => navigation.navigate('Grid');
  const onMapPress = () => navigation.navigate('Map');
  const onSearchPress = () => navigation.navigate('Search');
  const onVoiceControlPress = () => navigation.navigate('VoiceControl');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MenuButton title="List" onPress={onListPress} />
      <MenuButton title="Grid" onPress={onGridPress} />
      <MenuButton title="Map" onPress={onMapPress} />
      <MenuButton title="Search" onPress={onSearchPress} />
      <MenuButton title="Voice Control" onPress={onVoiceControlPress} />
    </View>
  );
}

Menu.navigationOptions = {
  headerTitle: 'Car Play Example',
};
