
import { CarPlay, ListTemplate, SearchTemplate } from 'react-native-carplay';
import { onArticlePress } from '../App';
import { search } from '../data/search';

let query = ''
let searchResults : any[] = [];

export const searchTemplate = new SearchTemplate({
  async onSearch(q: string) {
    query = q
    return ([]);
  },

  async onItemSelect(e) {
  },

  onSearchButtonPressed() {
    search(query).then((results) => {
      searchResults = results
      CarPlay.pushTemplate(new ListTemplate({
        sections: [{items: searchResults.map((result) => ({text: result.canonical.headline}))}],
        title: `Search Results ${query}`,
        onItemSelect: async ({ index }) => {
          const result = searchResults[index];
          const resultDetails = {
            articleTitle: result.canonical?.headline,
            audioUrl: result.canonical.audio?.main?.url?.canonical,
            tegID: result.canonical.id
          }
          onArticlePress(resultDetails)
        }
      }))
    })
  },
});

