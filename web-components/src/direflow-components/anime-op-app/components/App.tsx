import React, { FC, useEffect } from 'react';
import { Styled } from 'direflow-component';
import styles from './App.less';
import HomePage from './home/HomePage';

/**
 * Fix for viewport units on mobile
 *
 * see: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
function setNavigationBarHeightCSSVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

interface AppProps {
  componentTitle: string;
  sampleList: string[];
}

const App: FC<AppProps> = (props) => {
  useEffect(() => {
    setNavigationBarHeightCSSVariable();

    // Whenever the viewport dimensions change, we recalculate the navigation bar height
    window.addEventListener('resize', setNavigationBarHeightCSSVariable);

    return () => {
      window.removeEventListener('resize', setNavigationBarHeightCSSVariable);
    };
  }, []);

  // External event example:
  // const dispatch = useContext(EventContext);

  // const handleClick = () => {
  //   const event = new Event('my-event');
  //   dispatch(event);
  // };

  return (
    <Styled styles={styles} scoped={false}>
      <div className="app">
        <HomePage />
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Web Components',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
};

export default App;
