import {
  format,
  subDays,
  subWeeks,
  subMonths,
  subYears,
  isValid,
} from 'date-fns';
import {split} from 'lodash';
import { nanoid } from 'nanoid/non-secure';
import { ListItem } from 'react-native-carplay/lib/interfaces/ListItem';
import {FIREBASE_API_KEY} from '@env'

export enum Sort {
  Relevance = 'Relevance',
  MostRecent = 'MostRecent',
}

export enum Range {
  Today = 'Today',
  Week = 'Week',
  Month = 'Month',
  Year = 'Year',
  Any = 'Any',
  Custom = 'Custom',
}

enum DateRange {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

export type SearchRangeFilter = {
  range: Range;
  start?: string;
  end?: string;
};

export interface SearchParams {
  term: string;
  offset: number;
  sort: Sort;
  range: SearchRangeFilter;
}

export interface GoogleResultItem {
  title: string;
  htmlSnippet: string;
  flyTitle: string;
  image: string;
  link: string;
  id: string;
}

enum SearchType {
  Search = 'search',
  SearchItem = 'SearchItem',
  SearchRangeSelection = 'SearchRangeSelection',
  SearchSortSelection = 'SearchSortSelection',
  SearchRangeObject = 'SearchRangeObject',
  SearchGoogleItem = 'SearchGoogleItem',
  SearchGoogle = 'SearchGoogle',
  SearchNextPage = 'SearchNextPage',
}

export interface SearchResultItem {
  id: string;
  title: string;
  description: string;
  flyTitle: string;
  image: string;
  readingTime: string;
  canonicalUrl: string;
  doesAudioExist: boolean;
}

export const SEARCH_BASE_URL =
  'https://www.googleapis.com/customsearch/v1/siterestrict';


const GOOGLE_API_BASE_URL = `${SEARCH_BASE_URL}?key=${FIREBASE_API_KEY}&cx=011811245671537348431:vvswa6a7vri&prettyPrint=false`;
const GOOGLE_API_FIELDS =
  'spelling(correctedQuery),items(title,htmlSnippet,pagemap(article(headline),cse_image(src)),link),queries(nextPage)';


export const search = async (term: string) => {
  const { items } = await fetchGoogleResult({term: term, offset: 0, sort: Sort.Relevance, range: {range: Range.Month}})
  const results = getSearchResults(items);
  return results;
}

const fetchGoogleResult = async ({ term, offset, sort, range }: SearchParams) => {
  const searchUrl = getGoogleSearchURL({ term, offset, sort, range });

    const response = await fetch(searchUrl, {
      headers: {
        'Accept-Encoding': 'gzip',
        'User-Agent': 'Lamarr (gzip)',
      },
    });

    const responseJson = await response.json();
    const responseItems = responseJson?.items ?? [];
    const nextPage = responseJson?.queries?.nextPage?.[0] ?? null;
    const items = getGoogleResponseItems(responseItems);
    const nextPageData = nextPage
      ? {
          __typename: SearchType.SearchNextPage,
          count: nextPage.count,
          startIndex: nextPage.startIndex,
          totalResults: nextPage.totalResults,
        }
      : null;

    const correctedQuery = responseJson?.spelling?.correctedQuery ?? null;

    return {
      __typename: SearchType.SearchGoogle,
      items,
      correctedQuery,
      nextPage: nextPageData,
    };
}

const getGoogleSearchURL = ({
  term,
  offset,
  sort,
  range: searchRangeFilter,
}: SearchParams) => {
  let rangeFilter = '';
  let dateRestrict = '';
  let sortValues = '';

  switch (searchRangeFilter.range) {
    case Range.Today:
      dateRestrict = 'd1';
      rangeFilter = formattedDateRangeFromToday(DateRange.Day);
      break;
    case Range.Week:
      dateRestrict = 'w1';
      rangeFilter = formattedDateRangeFromToday(DateRange.Week);
      break;
    case Range.Month:
      dateRestrict = 'm1';
      rangeFilter = formattedDateRangeFromToday(DateRange.Month);
      break;
    case Range.Year:
      dateRestrict = 'y1';
      rangeFilter = formattedDateRangeFromToday(DateRange.Year);
      break;
    case Range.Custom:
      if (searchRangeFilter.start && searchRangeFilter.end) {
        rangeFilter = formattedDateRange(
          new Date(searchRangeFilter.start),
          new Date(searchRangeFilter.end),
        );
      }
      break;
    default:
      break;
  }

  if (sort === Sort.MostRecent) {
    sortValues = `sort=date:d,date${rangeFilter}`;
  }

  if (sort === Sort.Relevance) {
    sortValues = `dateRestrict=${dateRestrict}`;
  }

  const startOffset = offset + 1;

  return `${GOOGLE_API_BASE_URL}&start=${startOffset}&${sortValues}&q=${term}&maxResults=20&fields=${GOOGLE_API_FIELDS}`;
};

const formattedDateRangeFromToday = (
  range: DateRange,
  value: number = 1,
): string => {
  let fromDate = new Date();
  const toDate = new Date();
  switch (range) {
    case DateRange.Day:
      fromDate = subDays(new Date(), value);
      break;
    case DateRange.Week:
      fromDate = subWeeks(new Date(), value);
      break;
    case DateRange.Month:
      fromDate = subMonths(new Date(), value);
      break;
    case DateRange.Year:
      fromDate = subYears(new Date(), value);
      break;
    default:
      return '';
  }
  const from = format(fromDate, 'yyyyMMdd');
  const to = format(toDate, 'yyyyMMdd');
  return `:r:${from}:${to}`;
};

const formattedDateRange = (fromDate: Date, toDate: Date): string => {
  if (!isValid(fromDate) || !isValid(toDate)) {
    return '';
  }

  const from = format(fromDate, 'yyyyMMdd');
  const to = format(toDate, 'yyyyMMdd');

  return `:r:${from}:${to}`;
};

const getGoogleResponseItems = (responseItems: any): GoogleResultItem[] => {
  return responseItems.map((item: any) => {
    const imageUrl = item?.pagemap?.cse_image?.[0]?.src ?? '';

    const { title, flyTitle } = getSearchTitles(item.title);
    return {
      __typename: SearchType.SearchGoogleItem,
      title,
      htmlSnippet: item.htmlSnippet,
      flyTitle,
      image: imageUrl,
      link: item.link,
      id: nanoid(),
    };
  });
};

const getSearchTitles = (
  title: string,
): { flyTitle: string; title: string } => {
  const itemArr = split(title, ' - ', 2);
  const flyTitle = itemArr[1] ? itemArr[0] : '';
  return { flyTitle, title: itemArr[1] || itemArr[0] };
};

const getSearchResults = async (
  items: GoogleResultItem[]
): Promise<Array<any>> => {
  const results : ListItem[] = []
  await Promise.all(items.map(async (item: GoogleResultItem) => {
    const data = await GetArticleDetail(item.link);
    console.log(data)
    if(data?.canonical?.audio) {
      results.push(data);
    }
  }));
  return results
};

const GetArticleDetail = async (link: string)=> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "rvjourney=EconomistSite/50/50/EconomistSite; rvuuid=3baec2e8cbfd77cbd329797c9229adee");

  var graphql = JSON.stringify({
    query: "query GetArticle($ref: String!){\n  canonical(ref: $ref) {\n    url {\n      canonical\n    }\n    id\n    headline\n    audio {\n      main {\n        url{\n          canonical\n        }\n      }\n    }\n  }\n}",
    variables: {"ref": link}
  })

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
  };

  const response = await fetch("https://content.p.aws.economist.com/graphql", requestOptions);
  const {data} = await response.json()
  return data
}
