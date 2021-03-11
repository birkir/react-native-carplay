import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { CarPlay, GridTemplate } from 'react-native-carplay';

export function Menu({ navigation }) {
  useEffect(() => {
    const helloWorld = new GridTemplate({
      buttons: [],
      title: 'Please Select an option',
    });

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
      <Button title="TabBar" onPress={onTabBarPress} />
      <Button title="List" onPress={onListPress} />
      <Button title="Gridsss" onPress={onGridPress} />
      <Button title="Map" onPress={onMapPress} />
      <Button title="Contact" onPress={onContactPress} />
      <Button title="Search" onPress={onSearchPress} />
      <Button title="Voice Control" onPress={onVoiceControlPress} />
      <Button title="Action Sheet" onPress={onActionSheetPress} />
      <Button title="Alert" onPress={onAlertPress} />
      <Button title="Information" onPress={onInformationPress} />
      <Button title="Now Playing" onPress={onNowPlayingPress} />
      <Button title="Point Of Interest" onPress={onPOIPress} />
    </View>
  );
}

Menu.navigationOptions = {
  headerTitle: 'Car Play Example',
};
