import { useRoute } from '@react-navigation/core';
import { RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, InformationTemplate, NowPlayingTemplate } from 'react-native-carplay';
import SoundPlayer from 'react-native-sound-player'
import { RootStackParamList } from '../App';

export function NowPlaying() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'NowPlaying'>>()

  const { article } = params

  useEffect(() => {
    const template = new InformationTemplate({
      title: 'Now Playing',
      items: [
        {
          title: 'Title',
          detail: article.title
        },
        {
          title: 'Published',
          detail: article.datePublished
        },
        {
          title: 'Audio File',
          detail: article.audio?.main?.url?.canonical || ''
        }
      ],
      actions: [
        {
          id: 'play',
          title: 'Play'
        },
        {
          id: 'stop',
          title: 'Stop'
        }
      ],
      onActionButtonPressed: ({ id }) => {
        switch(id) {
          case 'play': {
            if (article.audio?.main?.url?.canonical) {
              SoundPlayer.playUrl(article.audio?.main?.url?.canonical)
            }
            break;
          }
          case 'stop': {
            SoundPlayer.stop()
            break;
          }
          default:
        }
      }
    });
    CarPlay.pushTemplate(template);
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Now Playing</Text>
    </View>
  );
}

NowPlaying.navigationOptions = {
  headerTitle: 'Now Playing Template',
};
