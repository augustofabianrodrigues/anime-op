import { Styled } from 'direflow-component';
import React, { FC, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import SearchResultsGrid from './grid/SearchResultsGrid';
import SearchResultsList from './list/SearchResultsList';
import styles from './SearchResults.less';
import ViewType from '../../../models/ViewTypeEnum';
import ViewTypeToggle from './ViewTypeToggle';

const SearchResults: FC = () => {
  const [viewType, setViewType] = useState(ViewType.Grid);

  return (
    <Styled styles={styles}>
      <section className="search-results">
        <ViewTypeToggle
          value={viewType}
          onChange={(value) => setViewType(() => value)}
        />

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
      </section>
    </Styled>
  );
};

export default SearchResults;
