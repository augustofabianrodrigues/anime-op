import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './AnimeCard.less';

const AnimeCard: FC = () => {
  return (
    <Styled styles={styles}>
      <div tabIndex={0} className="anime-card">
        <div className="cover">
          <img
            alt="Nanatsu no Taizai Cover"
            src="https://media.kitsu.io/anime/poster_images/8699/original.jpg?1597699053"
          />
        </div>

        <p className="title">Nanatsu no Taizai</p>
        <div className="info">
          <span className="episodes-counter">24 episodes</span>
          <span className="rating">5 stars</span>
        </div>
      </div>
    </Styled>
  );
};

export default AnimeCard;
