import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import FiltersIcon from './FiltersIcon';
import styles from './ToggleFiltersButton.less';

interface ToggleFiltersButtonProps {
  onClick: () => void;
}

const ToggleFiltersButton: FC<ToggleFiltersButtonProps> = ({ onClick }) => {
  return (
    <Styled styles={styles}>
      <button type="button" className="toggle-filters-button" onClick={onClick}>
        <FiltersIcon />
        Filters
      </button>
    </Styled>
  );
};

export default ToggleFiltersButton;
