import { Styled } from 'direflow-component';
import React, { FC, useState } from 'react';
import CharacterModel from '../../models/CharacterModel';
import { empty } from '../../models/Optional';
import styles from './CharacterGallery.less';
import CharacterModal from './CharacterModal';
import RegularSection from './RegularSection';

interface CharacterGalleryProps {
  characters: CharacterModel[];
}

function renderGallery(
  characters: CharacterModel[],
  selectCharacter: (character: CharacterModel) => void
) {
  if (characters.length === 0) return 'N/A';

  return (
    <ul className="character-gallery">
      {characters.map((character) => (
        <li key={character.id}>
          <button onClick={() => selectCharacter(character)}>
            <figure>
              <img
                alt={character.canonicalName}
                src={character.image.original}
              />
              <figcaption>{character.canonicalName}</figcaption>
            </figure>
          </button>
        </li>
      ))}
    </ul>
  );
}

const CharacterGallery: FC<CharacterGalleryProps> = ({ characters }) => {
  const [selected, setSelected] = useState<CharacterModel>();

  return (
    <Styled styles={styles}>
      <RegularSection title="Characters" className="characters">
        {renderGallery(characters, setSelected)}
        {selected && (
          <CharacterModal
            character={selected}
            onClose={() => setSelected(empty())}
          />
        )}
      </RegularSection>
    </Styled>
  );
};

export default CharacterGallery;
