import React, { FC, useRef, useState } from 'react';
import { Styled } from 'direflow-component';
import styles from './HomePage.less';
import Hero from './Hero';
import SearchBar from './search/SearchBar';
import SearchResults from './results/SearchResults';
import Backdrop from '../slide-drawer/Backdrop';
import SlideDrawer from '../slide-drawer/SlideDrawer';
import FiltersDrawer from './search/filters/FiltersDrawer';
import BackToTop from './BackToTop';
import useAppIntersectionObserver from '../../hooks/useAppIntersectionObserver';
import useScrollLocationRestore from '../../hooks/useScrollLocationRestore';

const HomePage: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleToggleFilters = () => setDrawerOpen(() => true);
  const handleCloseDrawers = () => setDrawerOpen(() => false);

  const stickSearchBarIndicator = useRef<HTMLSpanElement>(null);
  const stickSearchBar = useAppIntersectionObserver(stickSearchBarIndicator);

  useScrollLocationRestore('/');

  return (
    <Styled styles={styles}>
      <div className="home-page">
        <SlideDrawer show={drawerOpen}>
          <FiltersDrawer onClose={handleCloseDrawers} />
        </SlideDrawer>
        {drawerOpen && <Backdrop onClick={handleCloseDrawers} />}

        <header>
          <h1 className="sr-only-title">アニメ OP</h1>
          <Hero />
        </header>

        <main>
          <SearchBar
            stuck={stickSearchBar}
            onToggleFilters={handleToggleFilters}
          />

          <span
            ref={stickSearchBarIndicator}
            className="search-bar-sticky-indicator"
          />

          <SearchResults />
        </main>

        <BackToTop />
      </div>
    </Styled>
  );
};

export default HomePage;
