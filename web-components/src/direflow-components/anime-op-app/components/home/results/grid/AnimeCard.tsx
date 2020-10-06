import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import AnimeSearchResultModel from '../../../../models/AnimeSearchResultModel';
import Subtype from '../../../shared/Subtype';
import StarsRating from '../../../shared/StarsRating';
import styles from './AnimeCard.less';

interface AnimeCardProps extends AnimeSearchResultModel {}

const AnimeCard: FC<AnimeCardProps> = (props) => {
  const hasInfo = Boolean(props.episodeCount || props.averageRating);

  return (
    <Styled styles={styles}>
      <Link to="/details/1" className="anime-card">
        <div className="cover">
          {props.posterImage && (
            <img
              alt={`${props.canonicalTitle} Cover`}
              src={props.posterImage.original}
            />
          )}
          {props.subtype && <Subtype value={props.subtype} />}
        </div>

        <p className="title">{props.canonicalTitle}</p>
        {hasInfo && (
          <div className="info">
            <span className="episodes-counter">
              {props.episodeCount && `${props.episodeCount} episodes`}
            </span>
            {props.averageRating && (
              <StarsRating averageRating={props.averageRating} />
            )}
          </div>
        )}
      </Link>
    </Styled>
  );
};

export default AnimeCard;
