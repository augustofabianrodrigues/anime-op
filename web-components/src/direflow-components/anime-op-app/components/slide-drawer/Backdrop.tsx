import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import styles from './Backdrop.less';

interface BackdropProps {
  opacity?: number;
  onClick: () => void;
}

const Backdrop: FC<BackdropProps> = ({ opacity = 1, onClick }) => {
  const opacityCSS = {
    opacity,
  };

  return (
    <Styled styles={styles}>
      <div style={opacityCSS} className="backdrop" onClick={onClick} />
    </Styled>
  );
};

export default Backdrop;
