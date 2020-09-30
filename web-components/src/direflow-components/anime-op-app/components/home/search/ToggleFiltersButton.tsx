import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './ToggleFiltersButton.less';

const ToggleFiltersButton: FC = () => {
  return (
    <Styled styles={styles}>
      <button type="button" className="toggle-filters-button">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3333 2.5H1.66666L8.33332 10.3833V15.8333L11.6667 17.5V10.3833L18.3333 2.5Z"
            stroke="#FBFDFE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Filters
      </button>
    </Styled>
  );
};

export default ToggleFiltersButton;
