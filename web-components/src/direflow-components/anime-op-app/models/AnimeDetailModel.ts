import AgeRatingEnum from './AgeRatingEnum';
import AnimeSubtypeEnum from './AnimeSubtypeEnum';
import CategoryModel from './CategoryModel';
import CharacterModel from './CharacterModel';
import GenreModel from './GenreModel';
import StreamerModel from './StreamerModel';
import AnimeImageModel from './AnimeImageModel';

interface AnimeDetailModel {
  id: string;
  ageRating: AgeRatingEnum;
  ageRatingGuide: string;
  averageRating?: number;
  canonicalTitle: string;
  episodeCount?: number;
  subtype?: AnimeSubtypeEnum;
  synopsis?: number;
  coverImage?: AnimeImageModel;
  titles: {
    [lang: string]: string;
  };
  youtubeVideoId?: string;

  // Relationships
  categories: CategoryModel[];
  characters: CharacterModel[];
  genres: GenreModel[];
  streamers: StreamerModel[];
}

export default AnimeDetailModel;
