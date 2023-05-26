import React, { useEffect, useState, useRef } from 'react';
import { Button, Text, View, Image, processColor } from 'react-native';
import {
  CarPlay,
  MapTemplate,
  Trip,
  NavigationSession,
  MapTemplateConfig,
  Maneuver,
  PauseReason,
  TimeRemainingColor,
  TravelEstimates,
} from 'react-native-carplay';

function MapView() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ flex: 1, width: '100%', height: '100%' }}
        source={require('../images/map/map.jpg')}
      />
    </View>
  );
}

const trip = new Trip({
  origin: {
    name: 'Home',
    latitude: 64,
    longitude: -21,
  },
  destination: {
    name: 'Disney Land',
    latitude: 64.5,
    longitude: -21.5,
  },
  routeChoices: [
    {
      additionalInformationVariants: ['Via DK45'],
      summaryVariants: ['Fastest route now'],
      selectionSummaryVariants: ['This is Summary for DK45'],
    },
    {
      additionalInformationVariants: ['Via DK99'],
      summaryVariants: ['Longer route'],
      selectionSummaryVariants: ['This is Summary for DK99'],
    },
  ],
});

function getTravelEstimates(): TravelEstimates {
  const distanceUnits = Math.random() > 0.5 ? 'miles' : 'feet';
  return {
    distanceRemaining: Math.floor(Math.random() * 100),
    timeRemaining: Math.floor(Math.random() * 1500),
    distanceUnits,
  };
}

const maneuvers: Maneuver[] = [
  {
    tintSymbolImage: 'yellow',
    instructionVariants: ['Wrong Way Dummy'],
    initialTravelEstimates: {
      distanceRemaining: 100,
      distanceUnits: 'meters',
      timeRemaining: 20,
    },
    symbolImage: require('../images/map/uturn.png'),
  },
  {
    tintSymbolImage: processColor('pink'),
    instructionVariants: ['Fork Left'],
    initialTravelEstimates: {
      distanceRemaining: 2,
      distanceUnits: 'miles',
      timeRemaining: 300,
    },
    symbolImage: require('../images/map/fork.png'),
  },
  {
    tintSymbolImage: '#ffaa00',
    instructionVariants: ['Right down 16th st'],
    initialTravelEstimates: {
      distanceRemaining: 3,
      distanceUnits: 'feet',
      timeRemaining: 50,
    },
    symbolImage: require('../images/map/right.png'),
  },
];

function getRandomManeuver(): Maneuver {
  const randomIndex = Math.floor(Math.random() * maneuvers.length);
  return { ...maneuvers[randomIndex] };
}

export function Map({ navigation }) {
  const [navigationSession, setNavigationSession] = useState<NavigationSession>(null);

  const mapTemplate = useRef<MapTemplate>();

  const onShowAlertPress = () => {
    mapTemplate.current.presentNavigationAlert({
      titleVariants: ['Test 1'],
      primaryAction: { title: 'Test 2' },
      secondaryAction: { title: 'Test 3' },
      duration: 1000,
    });
  };

  const onDismissAlertPress = () => {
    mapTemplate.current.dismissNavigationAlert(true);
  };

  const onShowPanningPress = () => {
    mapTemplate.current.showPanningInterface(true);
  };

  const onDismissPanningPress = () => {
    mapTemplate.current.dismissPanningInterface(true);
  };

  const onShowRouteChoicesPreviewPress = () => {
    mapTemplate.current.showRouteChoicesPreviewForTrip(trip);
  };

  const onDismissRouteChoicesPreviewPress = () => {
    mapTemplate.current.hideTripPreviews();
  };

  const onStartNavigation = async () => {
    mapTemplate.current.hideTripPreviews();
    const newNavigationSession = await mapTemplate.current.startNavigationSession(trip);
    newNavigationSession.updateManeuvers([getRandomManeuver()]);
    mapTemplate.current.updateTravelEstimates(
      trip,
      getTravelEstimates(),
      Math.floor(Math.random() * 4) as TimeRemainingColor,
    );
    setNavigationSession(newNavigationSession);
  };

  useEffect(() => {
    // change underlying component here
    // within this useEffect based on
    // changing dependencies
    const mapConfig: MapTemplateConfig = {
      component: MapView,
      onAlertActionPressed(e) {
        console.log(e);
      },
      onStartedTrip() {
        onStartNavigation();
      },
    };

    if (!mapTemplate.current) {
      mapTemplate.current = new MapTemplate(mapConfig);
    } else {
      mapTemplate.current.updateConfig(mapConfig);
    }

    CarPlay.pushTemplate(mapTemplate.current, false);
    mapTemplate.current.showTripPreviews([trip]);
    return () => CarPlay.popToRootTemplate(true);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Show alert" onPress={onShowAlertPress} />
      <Button title="Dismiss alert" onPress={onDismissAlertPress} />

      <Button title="Show route choices" onPress={onShowRouteChoicesPreviewPress} />
      <Button title="Dismiss route choices" onPress={onDismissRouteChoicesPreviewPress} />

      <View style={{ height: 16 }} />
      <Button title="Show panning" onPress={onShowPanningPress} />
      <Button title="Dismiss panning" onPress={onDismissPanningPress} />
      <View style={{ height: 16 }} />
      {navigationSession ? (
        <>
          <Text>Navigation:</Text>
          <Button
            title="Custom Pause"
            onPress={() => navigationSession.pause(PauseReason.Loading, 'Custom Pause')}
          />
          <Button
            title="Re-routing"
            onPress={() => navigationSession.pause(PauseReason.Rerouting)}
          />
          <Button
            title="Change Maneuver"
            onPress={() => {
              navigationSession.updateManeuvers([getRandomManeuver()]);
            }}
          />
          <Button
            title="Show Two Maneuvers"
            onPress={() => {
              navigationSession.updateManeuvers([getRandomManeuver(), getRandomManeuver()]);
            }}
          />
          <Button
            title="Change Manuever Estimate"
            onPress={() => {
              navigationSession.updateTravelEstimates(0, getTravelEstimates());
            }}
          />
          <Button
            title="Change Trip Estimates"
            onPress={() => {
              mapTemplate.current.updateTravelEstimates(
                trip,
                getTravelEstimates(),
                Math.floor(Math.random() * 4) as TimeRemainingColor,
              );
            }}
          />
          <Button
            title="Cancel"
            onPress={() => {
              navigationSession.cancel();
              setNavigationSession(null);
            }}
          />
          <Button
            title="Finish"
            onPress={() => {
              navigationSession.finish();
              setNavigationSession(null);
            }}
          />
        </>
      ) : (
        <Button title="Start Navigation" onPress={onStartNavigation} />
      )}
    </View>
  );
}

Map.navigationOptions = {
  headerTitle: 'Map Template',
};
