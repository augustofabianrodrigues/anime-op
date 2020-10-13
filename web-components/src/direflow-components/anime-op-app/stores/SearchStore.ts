import { Store } from 'pullstate';
import AgeRatingEnum from '../models/AgeRatingEnum';
import SearchInputModel from '../models/SearchInputModel';
import SearchResultsModel from '../models/SearchResultsModel';
import ViewTypeEnum from '../models/ViewTypeEnum';

interface SearchStoreModel {
  input: SearchInputModel;
  viewType: ViewTypeEnum;
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
  viewType: ViewTypeEnum.Grid,
  results: {
    loading: false,
    hasMore: false,
    items: [],
  },
});

export default SearchStore;
