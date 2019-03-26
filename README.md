# CarPlay with React Native

What if you could create CarPlay with React Native. Well, now you can.

![List Template](.github/list-template.png)

![Grid Template](.github/grid-template.png)

![Search Template](.github/search-template.png)

## Usage

```jsx
import { CarPlay, ListTemplate } from 'react-native-carplay';

// Register a new template in memory
const artists = new ListTemplate({
  title: 'List of artists',
  leadingNavigationBarButtons: [{
    id: 'play',
    type: 'text',
    title: 'Play',
  }],
  sections: [{
    items: [{
      text: 'AC/DC'
      detailText: 'Rock',
      image: require('./artists/ac-dc.png'),
      showsDisclosureIndicator: true,
    }],
  }],
  onItemSelect(item) {
    const artist = new ListTemplate({
      title: 'AC/DC',
      sections: [...],
    });

    CarPlay.pushTemplate(artist, true);
  }
});

// Somewhere in your app
class App extends Component {
  componentDidMount() {
    CarPlay.setRootTemplate(songs, false);
  }
}
```

## Progress

### UI Elements

- [x] CPListTemplate
- [x] CPGridTemplate
- [x] CPSearchTemplate
- [ ] CPMapTemplate

### Route Guidance

- [ ] CPNavigationSession
- [ ] CPTrip
- [ ] CPManeuver

### Other

- [ ] CPSessionConfiguration
- [ ] CPAlertTemplate
- [ ] CPAlertAction

### Methods

- [x] setRootTemplate
- [x] pushTemplate
- [x] popTemplate
- [x] popToTemplate
- [x] updateListTemplateSections
- [x] reactToUpdatedSearchText
- [x] reactToSelectedResult

### Events

- [x] didConnect
- [x] didDisconnect
- [x] didSelectListItem
- [x] selectedResult
- [x] gridButtonPressed
- [x] updatedSearchText
- [x] searchButtonPressed
- [x] barButtonPressed
