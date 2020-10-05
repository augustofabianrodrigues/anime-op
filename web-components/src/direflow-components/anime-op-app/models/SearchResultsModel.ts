import AnimeSearchResultModel from './AnimeSearchResultModel';

interface SearchResultsModel {
  hasMore: boolean;
  loading: boolean;
  items: AnimeSearchResultModel[];
}

export default SearchResultsModel;
