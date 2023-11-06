import { CarPlay, GridTemplate } from 'react-native-carplay';
import { listTemplate } from './list.template';
import { gridTemplate } from './grid.template';
import { searchTemplate } from './search.template';
import { messageTemplate } from './message.template';
import { paneTemplate } from './pane.template';
import { mapTemplate } from './map.template';
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
      id: 'Message',
      titleVariants: ['Message'],
      image: gridItemImage,
    },
    {
      id: 'Pane',
      titleVariants: ['Pane'],
      image: gridItemImage,
    },
  ],
  title: 'Hello from react-native-carplay',
  onButtonPressed: e => {
    if (e.id === 'List') {
      CarPlay.pushTemplate(listTemplate);
    } else if (e.id === 'Grid') {
      CarPlay.pushTemplate(gridTemplate);
    } else if (e.id === 'Search') {
      CarPlay.pushTemplate(searchTemplate);
    } else if (e.id === 'Message') {
      CarPlay.pushTemplate(messageTemplate);
    } else if (e.id === 'Pane') {
      CarPlay.pushTemplate(paneTemplate);
    } else if (e.id === 'Map') {
      CarPlay.pushTemplate(mapTemplate);
    }
  },
});
