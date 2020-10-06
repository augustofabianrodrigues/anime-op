import GenreModel from '../models/GenreModel';
import SearchResultsModel from '../models/SearchResultsModel';

interface AppProps {
  searchResults: SearchResultsModel;
  genres: GenreModel[];
}

export default AppProps;
