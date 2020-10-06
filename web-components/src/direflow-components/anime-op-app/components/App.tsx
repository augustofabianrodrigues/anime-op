import React, { FC, useContext, useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.less';
import HomePage from './home/HomePage';
import AppContext from './AppContext';
import AppProps from './AppProps';
import DetailsPage from './details/DetailsPage';
import SearchStore from '../stores/SearchStore';
import SearchStoreReactions from './stores/SearchStoreReactions';
import SetNavigationBarHeightCSSVariable from './utils/SetNavigationBarHeightCSSVariable';
import LoadGenresEvent from '../events/LoadGenresEvent';
import GenreStore from '../stores/GenreStore';

const App: FC<AppProps> = ({ searchResults, genres }) => {
  const dispatch = useContext(EventContext);

  useEffect(() => {
    dispatch(new LoadGenresEvent());
  }, [dispatch]);

  useEffect(() => {
    SearchStore.update((s) => {
      s.results = { ...searchResults };
    });
  }, [searchResults]);

  useEffect(() => {
    GenreStore.update(() => genres);
  }, [genres]);

  const appElement = useRef(null);
  const location = useLocation();

  return (
    <AppContext.Provider value={appElement}>
      <Styled styles={styles} scoped={false}>
        <div className="app" ref={appElement}>
          <SetNavigationBarHeightCSSVariable />
          <SearchStoreReactions />

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
