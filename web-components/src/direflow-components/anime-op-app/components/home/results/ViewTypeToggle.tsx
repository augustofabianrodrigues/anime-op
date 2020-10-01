import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './ViewTypeToggle.less';

const ViewTypeToggle: FC = () => {
  return (
    <Styled styles={styles}>
      <div className="view-type-toggle">
        <button className="selected">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 3H10.5V10H3.5V3Z"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 3H21.5V10H14.5V3Z"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 14H21.5V21H14.5V14Z"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 14H10.5V21H3.5V14Z"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Grid
        </button>
        <button>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 6H21.5"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 12H21.5"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 18H21.5"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 6H3.51"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 12H3.51"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 18H3.51"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          List
        </button>
      </div>
    </Styled>
  );
};

export default ViewTypeToggle;
