import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, SearchTemplate, VoiceControlTemplate } from 'react-native-carplay';

export function VoiceControl() {

  useEffect(() => {
    const voiceControlTemplate = new VoiceControlTemplate({
      voiceControlStates: [{
        identifier: 'TEST',
        image: require('../images/cat.jpg'),
        repeats: true,
        titleVariants: ['Searching...'],
      }]
    });

    CarPlay.presentTemplate(voiceControlTemplate, true);

    return () => CarPlay.dismissTemplate(true);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Voice</Text>
    </View>
  )
}

VoiceControl.navigationOptions = {
  headerTitle: 'Voice Control Template',
};
