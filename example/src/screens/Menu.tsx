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

    CarPlay.onConnect(() => {
      console.log('connected to carplay');
    })
    CarPlay.onDisconnect(() => {
      console.log('disconnected to carplay');
    })

    CarPlay.setRootTemplate(helloWorld);
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
      <MenuButton title="TabBar" onPress={onTabBarPress} />
      <MenuButton title="List" onPress={onListPress} />
      <MenuButton title="Grid" onPress={onGridPress} />
      <MenuButton title="Map" onPress={onMapPress} />
      <MenuButton title="Contact" onPress={onContactPress} />
      <MenuButton title="Search" onPress={onSearchPress} />
      <MenuButton title="Voice Control" onPress={onVoiceControlPress} />
      <MenuButton title="Action Sheet" onPress={onActionSheetPress} />
      <MenuButton title="Alert" onPress={onAlertPress} />
      <MenuButton title="Information" onPress={onInformationPress} />
      <MenuButton title="Now Playing" onPress={onNowPlayingPress} />
      <MenuButton title="Point Of Interest" onPress={onPOIPress} />
    </View>
  );
}

Menu.navigationOptions = {
  headerTitle: 'Car Play Example',
};
