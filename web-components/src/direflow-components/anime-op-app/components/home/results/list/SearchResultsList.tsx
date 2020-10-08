import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import SearchStore from '../../../../stores/SearchStore';
import AnimeListItem from './AnimeListItem';
import styles from './SearchResultsList.less';

const SearchResultsList: FC = () => {
  const { items, loading } = SearchStore.useState((s) => s.results);

  // TODO: Replace loading message for skeleton loader

  return (
    <Styled styles={styles}>
      <ul className="search-results-list">
        {loading && items.length === 0 && <p>Loading...</p>}
        {items.map((item) => (
          <AnimeListItem key={item.id} {...item} />
        ))}
      </ul>
    </Styled>
  );
};

export default SearchResultsList;
