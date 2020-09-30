import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './SearchBar.less';
import SearchInput from './SearchInput';

const SearchBar: FC = () => {
  return (
    <Styled styles={styles}>
      <section className="search-bar">
        <SearchInput />
      </section>
    </Styled>
  );
};

export default SearchBar;
