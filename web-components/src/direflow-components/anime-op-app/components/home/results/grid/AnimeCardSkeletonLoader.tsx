import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './AnimeCardSkeletonLoader.less';

const AnimeCardSkeletonLoader: FC = () => {
  return (
    <Styled styles={styles}>
      <div className="anime-card-skeleton-loader">
        <div className="loader-cover">
          <div className="loader-subtype" />
        </div>

        <div className="loader-title">
          <div className="loader-text" />
        </div>

        <div className="loader-info">
          <div className="loader-text" />
          <div className="loader-text" />
        </div>
      </div>
    </Styled>
  );
};

export default AnimeCardSkeletonLoader;
