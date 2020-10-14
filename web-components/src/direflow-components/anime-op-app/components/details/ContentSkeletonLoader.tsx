import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import styles from './ContentSkeletonLoader.less';

const ContentSkeletonLoader: FC = () => {
  return (
    <Styled styles={styles}>
      <div className="content content-skeleton-loader">
        <div className="player" />

        <div className="main-info">
          <div className="title" />
          <div className="subtype-and-rating" />
          <div className="episode-count" />
        </div>

        <div className="regular-section synopsis">
          <div className="section-title" />
          <div className="line-90" />
          <div className="line-100" />
          <div className="line-100" />
          <div className="line-90" />
          <div className="line-80" />
          <div className="line-40" />
        </div>

        <div className="regular-section age-rating">
          <div className="section-title" />
          <div className="line-40" />
        </div>

        <div className="regular-section genres">
          <div className="section-title" />
          <div className="line-40" />
        </div>

        <div className="regular-section categories">
          <div className="section-title" />
          <div className="line-80" />
          <div className="line-40" />
        </div>

        <div className="regular-section titles">
          <div className="section-title" />
          <div className="line-40" />
          <div className="line-40" />
          <div className="line-40" />
        </div>

        <div className="regular-section streamers">
          <div className="section-title" />
          <div className="line-40" />
          <div className="line-40" />
        </div>

        <div className="regular-section characters">
          <div className="section-title" />
          <div className="character-gallery" />
        </div>
      </div>
    </Styled>
  );
};

export default ContentSkeletonLoader;
