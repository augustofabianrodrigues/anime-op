import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import AnimeListItem from './AnimeListItem';
import styles from './SearchResultsList.less';

const SearchResultsList: FC = () => {
  return (
    <Styled styles={styles}>
      <ul className="search-results-list">
        <AnimeListItem />
        <AnimeListItem />
        <AnimeListItem />
        <AnimeListItem />
        <AnimeListItem />
        <AnimeListItem />
        <AnimeListItem />
        <AnimeListItem />
        <AnimeListItem />
        <AnimeListItem />
        <AnimeListItem />
      </ul>
    </Styled>
  );
};

export default SearchResultsList;
