import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './FiltersDrawer.less';
import FiltersIcon from './FiltersIcon';

interface FiltersDrawerProps {
  onClose: () => void;
}

const FiltersDrawer: FC<FiltersDrawerProps> = ({ onClose }) => {
  return (
    <Styled styles={styles}>
      <aside className="filters-drawer">
        <header className="filters-header">
          <h2 className="filters-header-title">
            <FiltersIcon />
            Filters
          </h2>
          <button tabIndex={1} onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#FBFDFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#FBFDFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </header>
      </aside>
    </Styled>
  );
};

export default FiltersDrawer;
