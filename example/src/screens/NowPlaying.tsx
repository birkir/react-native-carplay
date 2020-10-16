import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, NowPlayingTemplate } from 'react-native-carplay';

export function NowPlaying() {
  useEffect(() => {
    const template = new NowPlayingTemplate({
    });
    CarPlay.pushTemplate(template);
    return () => {}
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Now Playing</Text>
    </View>
  )
}

NowPlaying.navigationOptions = {
  headerTitle: 'Now Playing Template',
};
