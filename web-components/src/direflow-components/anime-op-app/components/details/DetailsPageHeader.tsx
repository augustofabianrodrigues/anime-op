import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import styles from './DetailsPageHeader.less';
import { Link } from 'react-router-dom';

const DetailsPageHeader: FC = () => {
  return (
    <Styled styles={styles}>
      <header className="details-page-header">
        <div className="header-inner">
          <Link to="/">
            <span className="sr-only">Back</span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3333 16H6.66666"
                stroke="#FBFDFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 25.3333L6.66666 16L16 6.66666"
                stroke="#FBFDFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h1>Details</h1>
        </div>
      </header>
    </Styled>
  );
};

export default DetailsPageHeader;
