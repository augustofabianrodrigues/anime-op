import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ShowType from '../../../shared/ShowType';
import styles from './AnimeListItem.less';

const AnimeListItem: FC = () => {
  return (
    <Styled styles={styles}>
      <li className="anime-list-item">
        <Link to="/details/1">
          <p className="title">
            Nanatsu no Taizai: Imashime no Fukkatsu
          </p>
          <ShowType />
        </Link>
      </li>
    </Styled>
  );
};

export default AnimeListItem;
