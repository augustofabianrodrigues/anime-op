import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import SearchStore from '../../../stores/SearchStore';
import styles from './SearchBar.less';
import SearchInput from './SearchInput';
import ToggleFiltersButton from './ToggleFiltersButton';

interface SearchBarProps {
  onToggleFilters: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ onToggleFilters }) => {
  const { query } = SearchStore.useState((s) => s.input);

  const handleInputChange = (text: string) => {
    SearchStore.update((s) => {
      s.input.query = text;
    });
  };

  return (
    <Styled styles={styles}>
      <section className="search-bar">
        <SearchInput value={query} onChange={handleInputChange} />
        <ToggleFiltersButton onClick={onToggleFilters} />
      </section>
    </Styled>
  );
};

export default SearchBar;
