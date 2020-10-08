import React, { FC } from 'react';
import LanguageDictionaryList from '../shared/LanguageDictionaryList';
import RegularSection from './RegularSection';

interface TitlesProps {
  titles: {
    [lang: string]: string;
  };
}

const Titles: FC<TitlesProps> = ({ titles }) => {
  return (
    <RegularSection title="Titles" className="titles">
      <LanguageDictionaryList values={titles} />
    </RegularSection>
  );
};

export default Titles;
