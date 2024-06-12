import React, { useEffect, useReducer, useState } from 'react';
import { Text, View } from 'react-native';
import { AlertTemplate, CarPlay, TabBarTemplate } from 'react-native-carplay';
import { List } from './templates/List';
import { appStateReducer, CarPlayAppState } from './appStateReducer';

const initialAppState: CarPlayAppState = {
  selectedListIndex: undefined,
  selectedItemIndex: undefined,
};

export const StandAloneCarPlayApp = () => {
  const [carPlayConnected, setCarPlayConnected] = useState(CarPlay.connected);

  /*
   * CarPlay connection handling
   */
  useEffect(() => {
    function onConnect() {
      setCarPlayConnected(true);
    }

    function onDisconnect() {
      setCarPlayConnected(false);
    }

    CarPlay.registerOnConnect(onConnect);
    CarPlay.registerOnDisconnect(onDisconnect);

    return () => {
      CarPlay.unregisterOnConnect(onConnect);
      CarPlay.unregisterOnDisconnect(onDisconnect);
    };
  });

  /*
   * State handling: state changes => UI updates
   */
  const [appState, dispatch] = useReducer(appStateReducer, initialAppState);

  useEffect(() => {
    if (appState.selectedListIndex != undefined) {
      const subLevelItem0 = {
        text: 'SubLevelList Item 0 of TopLevelList ' + appState.selectedListIndex,
        showsDisclosureIndicator: false,
      };

      const subLevelItem1 = {
        text: 'SubLevelList Item 1 of TopLevelList ' + appState.selectedListIndex,
        showsDisclosureIndicator: false,
      };

      const subLevelSection = {
        items: [subLevelItem0, subLevelItem1],
      };

      const subLevelList = new List('SubLevelList', [subLevelSection], dispatch);

      CarPlay.pushTemplate(subLevelList);
      dispatch({ type: 'reset_list' });
    }
  }, [appState.selectedListIndex]);

  useEffect(() => {
    if (appState.selectedItemIndex != undefined) {
      const alertTemplate = new AlertTemplate({
        titleVariants: [`Non-browsable item ${appState.selectedItemIndex} selected!`],
        actions: [{ id: 'close', title: 'Close' }],
        onActionButtonPressed({ _id }) {
          CarPlay.dismissTemplate();
        },
      });

      CarPlay.presentTemplate(alertTemplate);
      dispatch({ type: 'reset_item' });
    }
  }, [appState.selectedItemIndex]);

  /*
   * CarPlay app initialization
   */
  useEffect(() => {
    if (carPlayConnected) {
      initVehicleApp();
    }
  }, [carPlayConnected]);

  function initVehicleApp() {
    const topLevelItem0 = {
      text: 'TopLevelList Item 0',
      showsDisclosureIndicator: true,
    };

    const topLevelItem1 = {
      text: 'TopLevelList Item 1',
      showsDisclosureIndicator: true,
    };

    const topLevelSection = {
      items: [topLevelItem0, topLevelItem1],
    };

    const topLevelList = new List('TopLevelList', [topLevelSection], dispatch);

    const tabBar = new TabBarTemplate({
      templates: [topLevelList],
    });

    CarPlay.setRootTemplate(tabBar);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold' }}>This is a placeholder for your app.</Text>
      <Text style={{ marginVertical: 15 }}>
        The CarPlay-/AndroidAuto-extension of your app can be launched independently of your phone
        app directly on the simulator or physical CarPlay-/AndroidAuto-client!
      </Text>
      <Text>
        Your app does not need to run on the phone in order for the CarPlay-/AndroidAuto-extension
        to work, so feel free to close or even kill this app on the phone.
      </Text>
    </View>
  );
};
