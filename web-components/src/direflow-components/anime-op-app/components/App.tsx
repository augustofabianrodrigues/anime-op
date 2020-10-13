import React, { FC, useContext, useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.less';
import HomePage from './home/HomePage';
import AppContext from './AppContext';
import AppProps from './AppProps';
import DetailsPage from './details/DetailsPage';
import useNavigationBarHeightCSSVariable from '../hooks/useNavigationBarHeightCSSVariable';
import useSearchStoreReactions from '../hooks/useSearchStoreReactions';
import useAppPropsToStoreSync from '../hooks/useAppPropsToStoreSync';
import LoadGenresEvent from '../events/LoadGenresEvent';

const App: FC<AppProps> = (props) => {
  const dispatch = useContext(EventContext);

  useNavigationBarHeightCSSVariable();
  useSearchStoreReactions();
  useAppPropsToStoreSync(props);

  // Dispatch load genres at startup
  useEffect(() => {
    dispatch(new LoadGenresEvent());
  }, [dispatch]);

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
