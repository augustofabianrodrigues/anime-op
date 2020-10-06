import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import SearchStore from '../../../../stores/SearchStore';
import AnimeCard from './AnimeCard';
import styles from './SearchResultsGrid.less';

const SearchResultsGrid: FC = () => {
  const { items } = SearchStore.useState((s) => s.results);

  return (
    <Styled styles={styles}>
      <div className="search-results-grid">
        {items.map((item) => (
          <AnimeCard key={item.id} {...item} />
        ))}
      </div>
    </Styled>
  );
};

export default SearchResultsGrid;
