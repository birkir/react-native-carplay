import { CarPlay, GridTemplate } from 'react-native-carplay';
import { listTemplate } from './list.template';
const gridItemImage = require('../images/go.png');

export const menuTemplate = new GridTemplate({
  buttons: [
    {
      id: 'List',
      titleVariants: ['List'],
      image: gridItemImage,
    },
    {
      id: 'Grid',
      titleVariants: ['Grid'],
      image: gridItemImage,
    },
    {
      id: 'Map',
      titleVariants: ['Map'],
      image: gridItemImage,
    },
    {
      id: 'Search',
      titleVariants: ['Search'],
      image: gridItemImage,
    },
    {
      id: 'Information',
      titleVariants: ['Information'],
      image: gridItemImage,
    },
    {
      id: 'VoiceControl',
      titleVariants: ['Voice'],
      image: gridItemImage,
    },
    {
      id: 'Alert',
      titleVariants: ['Alert'],
      image: gridItemImage,
    },
    {
      id: 'ActionSheet',
      titleVariants: ['ActionSheet'],
      image: gridItemImage,
    },
  ],
  title: 'Hello, world',
  onButtonPressed: e => {
    if (e.id === 'List') {
      CarPlay.pushTemplate(listTemplate);
    }
  },
});
