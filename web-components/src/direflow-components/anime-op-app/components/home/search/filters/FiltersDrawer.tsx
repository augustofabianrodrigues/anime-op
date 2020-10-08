import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './FiltersDrawer.less';
import FiltersIcon from '../FiltersIcon';
import AgeRating from './AgeRating';
import SearchStore from '../../../../stores/SearchStore';
import AgeRatingEnum from '../../../../models/AgeRatingEnum';
import Genre from './Genre';
import GenreModel from '../../../../models/GenreModel';
import XIcon from '../../../shared/XIcon';

interface FiltersDrawerProps {
  onClose: () => void;
}

const FiltersDrawer: FC<FiltersDrawerProps> = ({ onClose }) => {
  const { ageRatings, genres } = SearchStore.useState((s) => s.input);

  const handleAgeRatingsChange = (values: AgeRatingEnum[]) => {
    SearchStore.update((s) => {
      s.input.ageRatings = values;
    });
  };

  const handleGenresChange = (values: GenreModel[]) => {
    SearchStore.update((s) => {
      s.input.genres = values;
    });
  };

  return (
    <Styled styles={styles}>
      <aside className="filters-drawer">
        <header className="filters-header">
          <h2 className="filters-header-title">
            <FiltersIcon />
            Filters
          </h2>
          <button onClick={onClose}>
            <XIcon />
          </button>
        </header>

        <main>
          <AgeRating values={ageRatings} onChange={handleAgeRatingsChange} />
          <Genre values={genres} onChange={handleGenresChange} />
        </main>
      </aside>
    </Styled>
  );
};

export default FiltersDrawer;
