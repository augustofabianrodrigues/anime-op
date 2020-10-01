import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import AnimeCard from './AnimeCard';
import styles from './SearchResultsGrid.less';

const SearchResultsGrid: FC = () => {
  return (
    <Styled styles={styles}>
      <div className="search-results-grid">
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </div>
    </Styled>
  );
};

export default SearchResultsGrid;
