import AnimeDetailModel from '../models/AnimeDetailModel';
import GenreModel from '../models/GenreModel';
import Optional from '../models/Optional';
import SearchResultsModel from '../models/SearchResultsModel';

interface AppProps {
  animeDetail: Optional<AnimeDetailModel>;
  searchResults: SearchResultsModel;
  genres: GenreModel[];
}

export default AppProps;
