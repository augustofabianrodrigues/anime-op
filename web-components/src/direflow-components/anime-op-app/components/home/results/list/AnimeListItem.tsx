import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import ShowType from '../../../shared/ShowType';
import styles from './AnimeListItem.less';

const AnimeListItem: FC = () => {
  return (
    <Styled styles={styles}>
      <li tabIndex={0} className="anime-list-item">
        <p className="title">
          Nanatsu no Taizai: Imashime no Fukkatsu
        </p>
        <ShowType />
      </li>
    </Styled>
  );
};

export default AnimeListItem;
