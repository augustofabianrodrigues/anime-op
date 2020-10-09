import { Styled } from 'direflow-component';
import React, { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import CharacterModel from '../../models/CharacterModel';
import LazyAsyncImage from '../shared/LazyAsyncImage';
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
              <LazyAsyncImage
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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selected) {
      setShowModal(true);
    }
  }, [selected]);

  return (
    <Styled styles={styles}>
      <RegularSection title="Characters" className="characters">
        {renderGallery(characters, setSelected)}
        <CSSTransition
          in={showModal}
          timeout={300}
          classNames="character-modal"
          onExited={() => setSelected(undefined)}
        >
          <CharacterModal
            character={selected}
            onClose={() => setShowModal(false)}
          />
        </CSSTransition>
      </RegularSection>
    </Styled>
  );
};

export default CharacterGallery;
