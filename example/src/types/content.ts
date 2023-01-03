export enum BlogType {
  Erasmus = 'erasmus',
  Gulliver = 'gulliver',
  Kaffeeklatsch = 'kaffeeklatsch',
  Podcasts = 'podcasts',
  Prospero = 'prospero',
  BagehotsNotebook = 'bagehots-notebook',
  BartlebysNotebook = 'bartlebys-notebook',
  ButtonwoodsNotebook = 'buttonwoods-notebook',
  CharlemagnesNotebook = 'charlemagnes-notebook',
  DemocracyInAmerica = 'democracy-in-america',
  FreeExchange = 'free-exchange',
  GameTheory = 'game-theory',
  OpenFuture = 'open-future',
  TheEconomistExplains = 'the-economist-explains',
  SpeakersCorner = 'speakers-corner',
}

export enum ContentType {
  Advert = 'Advert',
  AnalysisNewsArticle = 'AnalysisNewsArticle',
  Article = 'Article',
  BlogPosting = 'BlogPosting',
  Chapter = 'Chapter',
  HubPage = 'HubPage',
  NewsArticle = 'NewsArticle',
  PublicationIssue = 'PublicationIssue',
  Quotation = 'Quotation',
  Report = 'Report',
  SocialMediaPosting = 'SocialMediaPosting',
  TheWorldInBrief = 'The world in brief',
  WebPage = 'WebPage',
  RelatedStory = 'RelatedStory',
  EspressoFact = 'FactOfTheDay',
  EspressoWord = 'WordOfTheWeek',
}

export enum CollectionType {
  DailyPodcasts = 'DailyPodcasts',
  Standard = 'Standard',
  TopStories = 'TopStories',
  SpecialCollection = 'SpecialCollection',
  LatestPodcasts = 'LatestPodcasts',
  EditionCollection = 'EditionCollection',
}

export interface PartURL {
  url: {
    canonical: string;
  } | null;
}

export type PartImage = PartURL & {
  width: number | null;
  height: number | null;
};

export interface MediaObject {
  inline: PartImage[] | null;
  main: PartImage | null;
  promo?: PartImage | null;
}

interface Image {
  aspectRatio: number;
  height: number;
  width: number;
  url: string;
}

export interface Collection {
  id: string;
  title: string;
  headline?: string;
  date?: string | undefined;
  introduction?: string;
  image?: Image | undefined;
  hasPart: {
    parts: Part[];
  };
}

export interface PrintSection {
  id: string;
  title: string;
}

interface Print {
  flyTitle: string | null;
  title: string;
  rubric: string | null;
  section: PrintSection;
}

export interface Publication {
  id: string;
  tegID: string;
  regionsAllowed: string[];
  datePublished: string;
  title: string;
  flyTitle: string;
}

export type DataContent = {
  id: string;
  type: Array<ContentType>;
} & HasParts;

export type HasParts = {
  hasPart: NestedPart & Array<HasParts>;
};

export type NestedPart = {
  parts: Array<HasParts> & Array<Part>;
};

export type IsPartOfContext = {
  title: string | undefined;
  flyTitle: string | undefined;
  rubric: string | undefined;
  image: MediaObject | undefined;
  datePublished: string | undefined;
};

export type IsPartOf = {
  id: string;
  context: IsPartOfContext;
};

export type AudioItem = PartURL & {
  id: string;
  duration: number;
  source: {
    id: string;
  };
};

type Audio = {
  main: AudioItem | null;
};

export interface PartTextItem {
  attribs?: { [key: string]: any };
  children?: PartTextItem[];
  data?: string;
  name?: string;
  type: string;
}

export interface CaptionItem {
  text?: string;
  tag?: string;
}

interface ArticleSectionInternal {
  id: string;
  title: string;
}

interface ArticleSection {
  internal: ArticleSectionInternal[] | null;
}

export interface Edition {
  section: {
    hasPart: {
      parts: Part[];
    };
  };
}

export interface Part {
  hasPart: {
    parts: Part[];
  };
  articleSection: ArticleSection | null;
  audio: Audio | null;
  byline: string;
  dateline: string | null;
  dateModified: string;
  datePublished: string;
  published: string;
  flyTitle: string;
  id: string;
  hasRead: boolean;
  image: MediaObject | null;
  isPartOf?: Array<IsPartOf>; // isPartOf is undefined on hubs articles for example
  print: Print | null;
  publication: Publication[] | null;
  rubric: string;
  source: {
    id: string;
  };
  tegID: string;
  text: PartTextItem[];
  title: string;
  type: ContentType[] | null;
  url: {
    canonical: string;
  };
}

export type EditionCoverImagePart = PartURL & {
  headline: string;
  width: number;
  height: number;
  regionsAllowed: string[];
};
