import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import AnimeSearchResultModel from '../../../../models/AnimeSearchResultModel';
import Subtype from '../../../shared/Subtype';
import styles from './AnimeListItem.less';

interface AnimeListItemProps extends AnimeSearchResultModel {}

const AnimeListItem: FC<AnimeListItemProps> = (props) => {
  return (
    <Styled styles={styles}>
      <li className="anime-list-item">
        <Link to={`/details/${props.id}`}>
          <p className="title">{props.canonicalTitle}</p>
          {props.subtype && <Subtype value={props.subtype} />}
        </Link>
      </li>
    </Styled>
  );
};

export default AnimeListItem;
