import { ListSection, ListTemplate } from 'react-native-carplay';

export const List = (name: string, sections: ListSection[], dispatch) => {
  return new ListTemplate({
    id: name,
    tabSystemImageName: 'list.bullet.circle',
    tabTitle: name,
    title: name,
    sections,
    async onItemSelect(item) {
      dispatch({
        type: `${name}_item_selected`,
        index: item.index,
      });
    },
    emptyViewTitleVariants: [name],
    emptyViewSubtitleVariants: ['Loading...'],
  });
};
