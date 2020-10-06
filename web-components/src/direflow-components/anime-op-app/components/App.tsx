import React, { FC, useContext, useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { EventContext, Styled } from 'direflow-component';
import debounce from 'lodash/debounce';
import styles from './App.less';
import HomePage from './home/HomePage';
import AppContext from './AppContext';
import AppProps from './AppProps';
import DetailsPage from './details/DetailsPage';
import SearchStore from '../stores/SearchStore';
import SearchInputModel from '../models/SearchInputModel';

/**
 * Fix for viewport units on mobile
 *
 * see: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
function setNavigationBarHeightCSSVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

const App: FC<AppProps> = ({ searchResults }) => {
  const dispatch = useContext(EventContext);

  useEffect(() => {
    setNavigationBarHeightCSSVariable();

    // Whenever the viewport dimensions change, we recalculate the navigation bar height
    window.addEventListener('resize', setNavigationBarHeightCSSVariable);

    return () => {
      window.removeEventListener('resize', setNavigationBarHeightCSSVariable);
    };
  }, []);

  useEffect(() => {
    const debouncedDispatch = debounce((input: SearchInputModel) => {
      dispatch(
        new CustomEvent<SearchInputModel>('search', { detail: input })
      );
    }, 500);

    return SearchStore.createReaction(
      (s) => s.input,
      (input, _, store) => {
        if (!store.results.loading) {
          debouncedDispatch(input);
        }
      },

      // Triggers the search reaction on mount
      { runNow: true }
    );
  }, [dispatch]);

  useEffect(() => {
    console.log(searchResults);
    SearchStore.update((s) => {
      s.results = { ...searchResults };
    });
  }, [searchResults]);

  const appElement = useRef(null);
  const location = useLocation();

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

export default App;
