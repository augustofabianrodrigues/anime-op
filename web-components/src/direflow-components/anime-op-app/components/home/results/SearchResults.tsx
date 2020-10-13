import { EventContext, Styled } from 'direflow-component';
import React, { FC, useContext, useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import once from 'lodash/once';
import noop from 'lodash/noop';
import SearchResultsGrid from './grid/SearchResultsGrid';
import SearchResultsList from './list/SearchResultsList';
import styles from './SearchResults.less';
import ViewType from '../../../models/ViewTypeEnum';
import ViewTypeToggle from './ViewTypeToggle';
import SearchStore from '../../../stores/SearchStore';
import InfiniteScroll from 'react-infinite-scroller';
import AppContext from '../../AppContext';
import LoadMoreEvent from '../../../events/LoadMoreEvent';

const SearchResults: FC = () => {
  const appElement = useContext(AppContext);
  const dispatch = useContext(EventContext);

  const { hasMore, items, loading } = SearchStore.useState((s) => s.results);
  const [viewType, setViewType] = useState(ViewType.Grid);

  const [loadMore, setLoadMore] = useState<() => void>(() => noop);

  useEffect(() => {
    setLoadMore(() => {
      return once(
        () => {
          if (loading || !hasMore) return;
          dispatch(new LoadMoreEvent());
        }
      );
    });
  }, [dispatch, loading, hasMore, items]);

  return (
    <Styled styles={styles}>
      <section className="search-results">
        <ViewTypeToggle
          value={viewType}
          onChange={(value) => setViewType(() => value)}
        />

        <InfiniteScroll
          pageStart={0}
          initialLoad={false}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={
            <div className="infinite-scroll-loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
          getScrollParent={() => appElement.current}
        >
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={viewType}
              classNames="fade"
              timeout={200}
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
            >
              {viewType === ViewType.Grid ? (
                <SearchResultsGrid />
              ) : (
                <SearchResultsList />
              )}
            </CSSTransition>
          </SwitchTransition>
        </InfiniteScroll>
      </section>
    </Styled>
  );
};

export default SearchResults;
