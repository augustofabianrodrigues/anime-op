import React, { FC, useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Styled } from 'direflow-component';
import styles from './App.less';
import HomePage from './home/HomePage';
import AppContext from './AppContext';
import DetailsPage from './details/DetailsPage';

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

  const appElement = useRef(null);
  const location = useLocation();

  // External event example:
  // const dispatch = useContext(EventContext);

  // const handleClick = () => {
  //   const event = new Event('my-event');
  //   dispatch(event);
  // };

  return (
    <AppContext.Provider value={appElement}>
      <Styled styles={styles} scoped={false}>
        <div className="app" ref={appElement}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={location.pathname}
              classNames="route"
              timeout={300}
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
            >
              <Switch location={location}>
                <Route exact path="/">
                  <HomePage />
                </Route>

                <Route exact path="/details/:id">
                  <DetailsPage />
                </Route>
              </Switch>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </Styled>
    </AppContext.Provider>
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
