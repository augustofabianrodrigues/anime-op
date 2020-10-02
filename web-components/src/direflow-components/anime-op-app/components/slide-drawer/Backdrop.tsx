import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import styles from './Backdrop.less';

interface BackdropProps {
  onClick: () => void;
}

const Backdrop: FC<BackdropProps> = ({ onClick }) => {
  return (
    <Styled styles={styles}>
      <div className="backdrop" onClick={onClick} />
    </Styled>
  );
};

export default Backdrop;
