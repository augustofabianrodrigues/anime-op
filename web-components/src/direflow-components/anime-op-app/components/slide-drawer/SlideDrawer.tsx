import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import classNames from 'classnames';
import styles from './SlideDrawer.less';

interface SlideDrawerProps {
  show: boolean;
}

const SlideDrawer: FC<SlideDrawerProps> = ({ show, children }) => {
  return (
    <Styled styles={styles}>
      <div className={classNames('slide-drawer', { open: show })}>
        {children}
      </div>
    </Styled>
  );
};

export default SlideDrawer;
