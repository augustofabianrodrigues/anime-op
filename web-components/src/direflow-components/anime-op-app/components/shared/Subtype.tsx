import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import classNames from 'classnames';
import AnimeSubtypeEnum from '../../models/AnimeSubtypeEnum';
import styles from './Subtype.less';

interface SubtypeProps {
  value: AnimeSubtypeEnum;
}

const Subtype: FC<SubtypeProps> = ({ value }) => {
  return (
    <Styled styles={styles}>
      <span className={classNames('show-type', [value.toLowerCase()])}>
        {value}
      </span>
    </Styled>
  );
};

export default Subtype;
