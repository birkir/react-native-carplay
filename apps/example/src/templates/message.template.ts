import { CarPlay, MessageTemplate } from 'react-native-carplay';

export const messageTemplate = new MessageTemplate({
  message: 'Hello, world!',
  debugMessage: 'Lorem ipsum',
  headerAction: { type: 'back' },
});
