import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import styles from './DetailsPage.less';

const DetailsPage: FC = () => {
  return (
    <Styled styles={styles}>
      <div className="details-page">
        <header>
          <h1>Details</h1>
        </header>

        <main>
          Character details here.
        </main>
      </div>
    </Styled>
  );
};

export default DetailsPage;
