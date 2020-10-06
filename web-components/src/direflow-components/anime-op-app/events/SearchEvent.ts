import SearchInputModel from '../models/SearchInputModel';

const EVENT_NAME = 'search';

class SearchEvent extends CustomEvent<SearchInputModel> {
  constructor(detail: SearchInputModel) {
    super(EVENT_NAME, { detail });
  }
}

export default SearchEvent;
