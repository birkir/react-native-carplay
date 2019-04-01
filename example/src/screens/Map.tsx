import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { CarPlay, MapTemplate, Trip } from 'react-native-carplay';
import { TextConfiguration } from 'react-native-carplay/lib/interfaces/TextConfiguration';

function MapView() {
  return (
    <View style={{ height: 100, width: 100, backgroundColor: 'green' }} />
  );
}

export function Map() {

  const [navigationSession, setNavigationSession] = useState(null);

  const mapTemplate = new MapTemplate({
    component: MapView,
    onAlertActionPressed(e) {
      console.log(e);
    }
  });

  const onShowAlertPress = () => {
    mapTemplate.presentNavigationAlert({
      titleVariants: ['Test 1'],
      primaryAction: { title: 'Test 2' },
      secondaryAction: { title: 'Test 3'},
      duration: 1000,
    });
  }

  const onDismissAlertPress = () => {
    mapTemplate.dismissNavigationAlert(true);
  }

  const onShowPanningPress = () => {
    mapTemplate.showPanningInterface(true);
  };

  const onDismissPanningPress = () => {
    mapTemplate.dismissPanningInterface(true);
  };

  const onStartNavigation = async () => {

    const trip = new Trip({
      origin: {
        latitude: 64,
        longitude: -21,
      },
      destination: {
        latitude: 64.5,
        longitude: -21.5,
      },
      routeChoices: [{
        additionalInformationVariants: ['a'],
        selectionSummaryVariants: ['b'],
        summaryVariants: ['c'],
      }],
    });

    setNavigationSession(await mapTemplate.startNavigationSession(trip));
  };

  useEffect(() => {
    CarPlay.pushTemplate(mapTemplate, false);
    return () => CarPlay.popToRootTemplate(true);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Show alert" onPress={onShowAlertPress} />
      <Button title="Dismiss alert" onPress={onDismissAlertPress} />
      <View style={{ height: 16 }} />
      <Button title="Show panning" onPress={onShowPanningPress} />
      <Button title="Dismiss panning" onPress={onDismissPanningPress} />
      <View style={{ height: 16 }} />
      {navigationSession ? (
        <>
          <Text>Navigation:</Text>
          <Button title="Pause" onPress={() => navigationSession.pause(1, 'Paused')} />
          <Button title="Cancel" onPress={() => { navigationSession.cancel(); setNavigationSession(null) }} />
          <Button title="Finish" onPress={() => { navigationSession.finish();  setNavigationSession(null); }} />
        </>
      ) : (
        <Button title="Start Navigation" onPress={onStartNavigation} />
      )}
    </View>
  )
}

Map.navigationOptions = {
  headerTitle: 'Map Template',
};
