import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import CharacterModel from '../../models/CharacterModel';
import styles from './CharacterGallery.less';
import RegularSection from './RegularSection';

interface CharacterGalleryProps {
  characters: CharacterModel[];
}

function renderGallery(characters: CharacterModel[]) {
  if (characters.length === 0) return 'N/A';

  return (
    <ul className="character-gallery">
      {characters.map((character) => (
        <li key={character.id}>
          <img alt={character.canonicalName} src={character.image.original} />
        </li>
      ))}
    </ul>
  );
}

const CharacterGallery: FC<CharacterGalleryProps> = ({ characters }) => {
  return (
    <Styled styles={styles}>
      <RegularSection title="Characters" className="characters">
        {renderGallery(characters)}
      </RegularSection>
    </Styled>
  );
};

export default CharacterGallery;
