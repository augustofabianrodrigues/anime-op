import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './SearchBar.less';
import SearchInput from './SearchInput';
import ToggleFiltersButton from './ToggleFiltersButton';

interface SearchBarProps {
  onToggleFilters: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ onToggleFilters }) => {
  return (
    <Styled styles={styles}>
      <section className="search-bar">
        <SearchInput />
        <ToggleFiltersButton onClick={onToggleFilters} />
      </section>
    </Styled>
  );
};

export default SearchBar;
