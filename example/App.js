import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { CarPlay, GridTemplate, SearchTemplate, MapTemplate } from 'react-native-carplay';
import Cat from './cat.jpg';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


function CarPlayApp() {
  const [backgroundColor, setBackgroundColor] = React.useState('orange');
  const onPress = () => {
    setBackgroundColor('blue');
  }

  CarPlay.emitter.addListener('didEndPanGestureWithVelocity', e => {
    const rgb = Array.from({ length: 3 }).map(n => Math.floor(Math.random() * 255));
    setBackgroundColor(`rgba(${rgb.join(', ')}, 1)`);
  })

  return (
    <View
      onPress={onPress}
      style={[{ backgroundColor }, StyleSheet.absoluteFill]}
    >
      <Text>Hello world</Text>
    </View>
  );
}

export default class App extends Component {
  componentDidMount() {

    const events = [
      // interface
      'barButtonPressed',
      'didAppear',
      'didDisappear',
      'willAppear',
      'willDisappear',
      // grid
      'gridButtonPressed',
      // list
      'didSelectListItem',
      // search
      'updatedSearchText',
      'searchButtonPressed',
      'selectedResult',
      // maps
      'didUpdatePanGestureWithTranslation',
      'didEndPanGestureWithVelocity',
      'panEndedWithDirection',
      'panWithDirection',
      'didBeginPanGesture',
      'didDismissPanningInterface',
      'willDismissPanningInterface',
      'didShowPanningInterface',
      'didDismissNavigationAlert',
      'willDismissNavigationAlert',
      'didShowNavigationAlert',
      'willShowNavigationAlert',
      'didCancelNavigation',
    ];

    events.forEach(eventName =>
      CarPlay.emitter.addListener(eventName, e => {
        console.log('HELLO', eventName, e);
      })
    );

    const mapTpl = new MapTemplate({
      id: 'MAP_TPL',
      component: CarPlayApp,
    });

    const tpl = new GridTemplate({
      id: 'SCREEN_1',
      title: 'demo',
      buttons: [{
        id: 'foo',
        titleVariants: ['Foo'],
        image: Cat,
      }, {
        id: 'bar',
        titleVariants: ['Bar'],
        image: Cat,
      }, {
        id: 'baz',
        titleVariants: ['Baz'],
        image: Cat,
      }]
      // sections: [{
      //   header:'yolo',
      //   items: [{
      //     image: Cat,
      //     text: 'test',
      //     detailText: 'sup',
      //     showsDisclosureIndicator: true
      //   }]
      // }],
      // async onItemSelect(res) {
      //   console.log('stuff', { res });
      //   return true;
      // }
    });

    this.tpl = tpl;

    CarPlay.onConnect(() => {
      console.log('connected');
      CarPlay.setRootTemplate(mapTpl, false);
    });

    CarPlay.onDisconnect(() => {
      console.log('disconnected');
    })
  }

  update = () => {
    this.tpl.updateSections([{
      header:'nopes',
      items: [{
        image: Cat,
        text: 'test',
        detailText: 'sup',
        showsDisclosureIndicator: true
      }, {
        image: Cat,
        text: 'test 2',
        detailText: 'sup 3',
        showsDisclosureIndicator: false
      }]
    }]);
  }

  push() {
    const tpl2 = new GridTemplate({
      id: 'SCREEN_2',
      title: 'demo2',
      buttons: [{
        id: 'asdf',
        image: Cat,
        titleVariants: ['Demo'],
      }, {
        id: 'dingo',
        image: Cat,
        titleVariants: ['Bar']
      }],
      leadingNavigationBarButtons: [{
        id: 'stuffer',
        type: 'text',
        title: 'Demo Bar',
        disabled: true,
      }]
    });

    CarPlay.pushTemplate(tpl2, true);
  }

  search = () => {
    const stpl = new SearchTemplate({
      id: 'SCREEN_3',
      onSearch(query) {
        return [{ text: `${query} 1` }, { text: 'world' },  { text: 'world' },  { text: 'world' },  { text: 'world' },  { text: 'world' },  { text: 'world' }, { text: 'world' }, { text: 'world' }, { text: 'world' }, { text: 'world' }];
      },
      async onItemSelect(res) {
        console.log({ res });
        return true;
      }
    });
    CarPlay.pushTemplate(stpl, true);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableHighlight onPress={this.push}><Text>Push</Text></TouchableHighlight>
        <TouchableHighlight onPress={this.update}><Text>Update</Text></TouchableHighlight>
        <TouchableHighlight onPress={this.search}><Text>Search</Text></TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
