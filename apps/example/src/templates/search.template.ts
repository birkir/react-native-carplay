import { CarPlay, SearchTemplate } from 'react-native-carplay';

export const searchTemplate = new SearchTemplate({
  headerAction: { type: 'back' },
  async onSearch(q: string) {
    CarPlay.bridge.toast('Searching for ' + q, 1000);
  },
  async onItemSelect() {
    CarPlay.bridge.toast('Item select ', 1000);
  },
  onSearchButtonPressed() {
    CarPlay.bridge.toast('onSearchButtonPressed', 1000);
  },
});
