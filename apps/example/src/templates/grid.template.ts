import { CarPlay, GridTemplate } from 'react-native-carplay';

export const gridTemplate = new GridTemplate({
  buttons: Array.from({ length: 8 }).map((_, i) => ({
    id: `BUTTON_${i}`,
    image: require('../images/click.png'),
    titleVariants: [`Item ${i}`],
  })),
  title: 'Grid Template',
  headerAction: { type: 'back' },
  onButtonPressed() {
    CarPlay.bridge.toast('button pressed', 1000);
  },
});
