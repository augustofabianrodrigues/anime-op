import { EventContext } from 'direflow-component';
import { FC, useContext, useEffect } from 'react';
import debounce from 'lodash/debounce';
import SearchInputModel from '../../models/SearchInputModel';
import SearchStore from '../../stores/SearchStore';
import SearchEvent from '../../events/SearchEvent';

const SearchStoreReactions: FC = () => {
  const dispatch = useContext(EventContext);

  useEffect(() => {
    const debouncedDispatch = debounce((input: SearchInputModel) => {
      dispatch(new SearchEvent(input));
    }, 500);

    return SearchStore.createReaction(
      (s) => s.input,
      (input, _, store) => {
        debouncedDispatch(input);
      },

      // Triggers the search reaction on mount
      { runNow: true }
    );
  }, [dispatch]);

  return null;
};

export default SearchStoreReactions;
