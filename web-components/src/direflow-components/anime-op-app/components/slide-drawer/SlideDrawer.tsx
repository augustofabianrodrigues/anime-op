import React, { FC, useEffect } from 'react';
import { Styled } from 'direflow-component';
import classNames from 'classnames';
import styles from './SlideDrawer.less';

interface SlideDrawerProps {
  show: boolean;
}

const SlideDrawer: FC<SlideDrawerProps> = ({ show, children }) => {
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      console.log(e);
    };

    document.addEventListener('touchmove', handleTouchMove);
    return () => document.removeEventListener('touchmove', handleTouchMove);
  }, []);

  return (
    <Styled styles={styles}>
      <div className={classNames('slide-drawer', { open: show })}>
        {children}
      </div>
    </Styled>
  );
};

export default SlideDrawer;
