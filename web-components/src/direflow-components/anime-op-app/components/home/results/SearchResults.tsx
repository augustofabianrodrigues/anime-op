import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import SearchResultsGrid from './grid/SearchResultsGrid';
import styles from './SearchResults.less';
import ViewTypeToggle from './ViewTypeToggle';

const SearchResults: FC = () => {
  return (
    <Styled styles={styles}>
      <section className="search-results">
        <ViewTypeToggle />
        <SearchResultsGrid />
      </section>
    </Styled>
  );
};

export default SearchResults;
