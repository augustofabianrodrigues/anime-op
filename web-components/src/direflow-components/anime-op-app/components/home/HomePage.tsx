import React, { FC, useRef } from 'react';
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
import useTouchSlideHandle from '../../hooks/useTouchSlideHandle';
import { SetOffsetStateOption } from '../../hooks/useTouchSlideHandle/actions';

const SLIDE_DRAWER_WIDTH = 320;

const HomePage: FC = () => {
  const [slideDrawerTranslateX, setSlideDrawerState] = useTouchSlideHandle(
    SLIDE_DRAWER_WIDTH
  );

  const handleToggleFilters = () =>
    setSlideDrawerState(SetOffsetStateOption.Open);
  const handleCloseDrawers = () =>
    setSlideDrawerState(SetOffsetStateOption.Closed);

  const stickSearchBarIndicator = useRef<HTMLSpanElement>(null);
  const stickSearchBar = useAppIntersectionObserver(stickSearchBarIndicator);

  useScrollLocationRestore('/');

  const showBackdrop = slideDrawerTranslateX > -SLIDE_DRAWER_WIDTH;
  const backdropOpacity = Math.max(
    ((slideDrawerTranslateX || 0) + SLIDE_DRAWER_WIDTH) / SLIDE_DRAWER_WIDTH,
    0
  );

  return (
    <Styled styles={styles}>
      <div className="home-page">
        <SlideDrawer translateX={slideDrawerTranslateX}>
          <FiltersDrawer onClose={handleCloseDrawers} />
        </SlideDrawer>
        {showBackdrop && (
          <Backdrop opacity={backdropOpacity} onClick={handleCloseDrawers} />
        )}

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
