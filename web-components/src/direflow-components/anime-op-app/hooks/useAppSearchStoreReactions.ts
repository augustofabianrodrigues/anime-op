import { EventContext } from 'direflow-component';
import { MutableRefObject, useContext, useEffect } from 'react';
import debounce from 'lodash/debounce';
import SearchInputModel from '../models/SearchInputModel';
import SearchStore from '../stores/SearchStore';
import SearchEvent from '../events/SearchEvent';

/**
 * Listen for changes on the search input model so it can dispatch a `SearchEvent`.
 * @param appElement The app element used for scrolling when a new search is made.
 */
function useAppSearchStoreReactions(
  appElement: MutableRefObject<HTMLElement | null>
) {
  const dispatch = useContext(EventContext);

  useEffect(() => {
    const { current: currentAppElement } = appElement;

    const debouncedDispatch = debounce((input: SearchInputModel) => {
      dispatch(new SearchEvent(input));
      currentAppElement?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 500);

    return SearchStore.createReaction(
      (s) => s.input,
      (input, _, store) => {
        debouncedDispatch(input);
      },

      // Triggers the search reaction on mount
      { runNow: true }
    );
  }, [dispatch, appElement]);
}

export default useAppSearchStoreReactions;
