export type CarPlayAppState = {
  selectedListIndex?: number;
  selectedItemIndex?: number;
};

export function appStateReducer(appState, action) {
  switch (action.type) {
    case 'TopLevelList_item_selected': {
      return {
        ...appState,
        selectedListIndex: action.index,
      };
    }
    case 'reset_list': {
      return {
        ...appState,
        selectedListIndex: undefined,
      };
    }
    case 'SubLevelList_item_selected': {
      return {
        ...appState,
        selectedItemIndex: action.index,
      };
    }
    case 'reset_item': {
      return {
        ...appState,
        selectedItemIndex: undefined,
      };
    }
  }
}
