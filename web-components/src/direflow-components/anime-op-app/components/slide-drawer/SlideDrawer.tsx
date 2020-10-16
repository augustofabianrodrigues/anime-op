import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import styles from './SlideDrawer.less';

interface SlideDrawerProps {
  translateX: number;
}

const SlideDrawer: FC<SlideDrawerProps> = ({ translateX, children }) => {
  const transform = { transform: `translateX(${translateX.toFixed(0)}px)` };

  return (
    <Styled styles={styles}>
      <div style={transform} className="slide-drawer">
        {children}
      </div>
    </Styled>
  );
};

export default SlideDrawer;
