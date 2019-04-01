import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Grid } from './screens/Grid';
import { List } from './screens/List';
import { Map } from './screens/Map';
import { Menu } from './screens/Menu';
import { Search } from './screens/Search';
import { VoiceControl } from './screens/VoiceControl';

const AppNavigator = createStackNavigator({
  List: {
    screen: List
  },
  Search: {
    screen: Search,
  },
  VoiceControl: {
    screen: VoiceControl,
  },
  Map: {
    screen: Map,
  },
  Grid: {
    screen: Grid
  },
  Menu: {
    screen: Menu
  },
}, {
  initialRouteName: 'Menu',
});

export const App = createAppContainer(AppNavigator);
