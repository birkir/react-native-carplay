import { CarPlay, ListTemplate } from 'react-native-carplay';

const sections = Array.from({ length: 26 }).map((_, i) => ({
  header: `Header ${String.fromCharCode(97 + i).toLocaleUpperCase()}`,
  items: Array.from({ length: 3 }).map((_, j) => ({
    text: `Item ${j + 1}`,
  })),
  sectionIndexTitle: String.fromCharCode(97 + i).toLocaleUpperCase(),
}));

export const listTemplate = new ListTemplate({
  sections,
  title: 'List Template',
  headerAction: { type: 'back' },
});
