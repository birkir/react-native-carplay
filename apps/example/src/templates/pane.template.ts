import { PaneTemplate } from 'react-native-carplay';

export const paneTemplate = new PaneTemplate({
  pane: {
    items: [
      {
        text: 'Pane',
        detailText: 'Detail Text',
      },
    ],
  },
  headerAction: { type: 'back' },
});
