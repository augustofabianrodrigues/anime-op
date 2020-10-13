import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './AnimeListItemSkeletonLoader.less';

const AnimeListItemSkeletonLoader: FC = () => {
  return (
    <Styled styles={styles}>
      <div className="anime-list-item-skeleton-loader">
        <div className="loader-title">
          <div className="loader-text" />
        </div>

        <div className="loader-subtype" />
      </div>
    </Styled>
  );
};

export default AnimeListItemSkeletonLoader;
