import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './ShowType.less';

const ShowType: FC = () => {
  return (
    <Styled styles={styles}>
      <span className="show-type tv">
        TV
      </span>
    </Styled>
  );
};

export default ShowType;
