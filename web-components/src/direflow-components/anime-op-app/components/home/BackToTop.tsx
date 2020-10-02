import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Styled } from 'direflow-component';
import classNames from 'classnames';
import styles from './BackToTop.less';
import AppContext from '../AppContext';

const BackToTop: FC = () => {
  const appElement = useContext(AppContext);
  const element = useRef(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    const { current: currentAppElement } = appElement;

    const appScrollHandler = () => {
      const { offsetHeight = 0, scrollTop = 0 } = currentAppElement || {};
      setActive(() => scrollTop > offsetHeight);
    };

    appScrollHandler();
    currentAppElement?.addEventListener('scroll', appScrollHandler);

    return () => {
      currentAppElement?.removeEventListener('scroll', appScrollHandler);
    };
  }, [appElement]);

  const handleClick = () => {
    appElement.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Styled styles={styles}>
      <button
        ref={element}
        type="button"
        className={classNames('back-to-top', { active })}
        onClick={handleClick}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45 37.5L30 22.5L15 37.5"
            stroke="#EBF4FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </Styled>
  );
};

export default BackToTop;
