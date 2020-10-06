import { Styled } from 'direflow-component';
import { useStoreState } from 'pullstate';
import React, { FC } from 'react';
import GenreModel from '../../../../models/GenreModel';
import GenreStore from '../../../../stores/GenreStore';
import LabeledCheckbox from '../../../shared/LabeledCheckbox';
import styles from './Genre.less';

interface GenreProps {
  values: GenreModel[];
  onChange: (values: GenreModel[]) => void;
}

const Genre: FC<GenreProps> = ({ values, onChange }) => {
  const availableGenres = useStoreState(GenreStore);

  const handleCheckboxChange = (genre: GenreModel, value: boolean) => {
    onChange(value ? [...values, genre] : values.filter((v) => v !== genre));
  };

  const renderCheckbox = (genre: GenreModel) => {
    return (
      <LabeledCheckbox
        key={genre.slug}
        label={genre.name}
        value={values.includes(genre)}
        onChange={(value) => handleCheckboxChange(genre, value)}
      />
    );
  };

  if (!availableGenres.length) return null;

  return (
    <Styled styles={styles}>
      <div className="genre">
        <h3>Genre</h3>
        {availableGenres.map(renderCheckbox)}
      </div>
    </Styled>
  );
};

export default Genre;
