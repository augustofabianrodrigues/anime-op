import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import AnimeSubtypeEnum from '../../models/AnimeSubtypeEnum';
import StarsRating from '../shared/StarsRating';
import Subtype from '../shared/Subtype';
import styles from './MainInfo.less';

interface MainInfoProps {
  canonicalTitle: string;
  averageRating?: number;
  subtype?: AnimeSubtypeEnum;
  episodeCount?: number;
}

const MainInfo: FC<MainInfoProps> = ({
  canonicalTitle,
  averageRating,
  subtype,
  episodeCount,
}) => {
  return (
    <Styled styles={styles}>
      <section className="main-info">
        <h2 className="title">{canonicalTitle}</h2>
        <div className="subtype-and-rating">
          {averageRating && <StarsRating averageRating={averageRating} />}
          {subtype && <Subtype value={subtype} />}
        </div>
        {episodeCount && (
          <div className="episode-count">{episodeCount} episodes</div>
        )}
      </section>
    </Styled>
  );
};

export default MainInfo;
