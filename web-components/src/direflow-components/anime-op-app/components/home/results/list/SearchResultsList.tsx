import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import SearchStore from '../../../../stores/SearchStore';
import AnimeListItem from './AnimeListItem';
import styles from './SearchResultsList.less';

const SearchResultsList: FC = () => {
  const { items } = SearchStore.useState((s) => s.results);

  return (
    <Styled styles={styles}>
      <ul className="search-results-list">
        {items.map((item) => (
          <AnimeListItem key={item.id} {...item} />
        ))}
      </ul>
    </Styled>
  );
};

export default SearchResultsList;
