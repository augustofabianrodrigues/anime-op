import AnimeSubtypeEnum from './AnimeSubtypeEnum';

interface AnimeSearchResultModel {
  id: string;
  canonicalTitle: string;
  averageRating?: number;
  subtype?: AnimeSubtypeEnum;
  episodeCount?: number;
  posterImage?: {
    original: string;
  };
}

export default AnimeSearchResultModel;
