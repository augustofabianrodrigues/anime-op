import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import styles from './HomePage.less';
import Hero from './Hero';
import SearchBar from './search/SearchBar';

const HomePage: FC = () => {
  return (
    <Styled styles={styles}>
      <div className="home-page">
        <header>
          <h1 className="sr-only-title">アニメ OP</h1>
          <Hero />
        </header>

        <SearchBar />
      </div>
    </Styled>
  );
};

export default HomePage;
