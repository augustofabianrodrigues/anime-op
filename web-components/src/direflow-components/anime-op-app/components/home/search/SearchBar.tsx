import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './SearchBar.less';
import SearchInput from './SearchInput';
import ToggleFiltersButton from './ToggleFiltersButton';

const SearchBar: FC = () => {
  return (
    <Styled styles={styles}>
      <section className="search-bar">
        <SearchInput />
        <ToggleFiltersButton />
      </section>
    </Styled>
  );
};

export default SearchBar;
