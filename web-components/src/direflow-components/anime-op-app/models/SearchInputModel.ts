import AgeRatingEnum from './AgeRatingEnum';
import GenreModel from './GenreModel';

interface SearchInputModel {
  query: string;
  ageRatings: AgeRatingEnum[];
  genres: GenreModel[];
}

export default SearchInputModel;
