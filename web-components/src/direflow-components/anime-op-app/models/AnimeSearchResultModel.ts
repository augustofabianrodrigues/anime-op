import AnimeImageModel from './AnimeImageModel';
import AnimeSubtypeEnum from './AnimeSubtypeEnum';

interface AnimeSearchResultModel {
  id: string;
  canonicalTitle: string;
  averageRating?: number;
  subtype?: AnimeSubtypeEnum;
  episodeCount?: number;
  posterImage?: AnimeImageModel;
}

export default AnimeSearchResultModel;
