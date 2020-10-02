import React, { FC, useState } from 'react';
import { Styled } from 'direflow-component';
import styles from './HomePage.less';
import Hero from './Hero';
import SearchBar from './search/SearchBar';
import SearchResults from './results/SearchResults';
import Backdrop from '../slide-drawer/Backdrop';
import SlideDrawer from '../slide-drawer/SlideDrawer';
import FiltersDrawer from './search/FiltersDrawer';

const HomePage: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleToggleFilters = () => setDrawerOpen(() => true);
  const handleCloseDrawers = () => setDrawerOpen(() => false);

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
          <SearchBar onToggleFilters={handleToggleFilters} />
          <SearchResults />
        </main>
      </div>
    </Styled>
  );
};

export default HomePage;
