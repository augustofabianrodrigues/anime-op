import { Store } from 'pullstate';
import AgeRatingEnum from '../models/AgeRatingEnum';
import SearchInputModel from '../models/SearchInputModel';
import SearchResultsModel from '../models/SearchResultsModel';

interface SearchStoreModel {
  input: SearchInputModel;
  results: SearchResultsModel;
}

const SearchStore = new Store<SearchStoreModel>({
  input: {
    query: '',
    ageRatings: [
      AgeRatingEnum.GeneralAudiences,
      AgeRatingEnum.ParentalGuidanceSuggested,
    ],
    genres: [],
  },
  results: {
    loading: false,
    hasMore: false,
    items: [],
  },
});

export default SearchStore;
