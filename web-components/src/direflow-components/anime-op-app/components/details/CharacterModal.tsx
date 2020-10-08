import { Styled } from 'direflow-component';
import React, { FC, useContext } from 'react';
import { createPortal } from 'react-dom';
import CharacterModel from '../../models/CharacterModel';
import AppContext from '../AppContext';
import LanguageDictionaryList from '../shared/LanguageDictionaryList';
import XIcon from '../shared/XIcon';
import Backdrop from '../slide-drawer/Backdrop';
import styles from './CharacterModal.less';
import RegularSection from './RegularSection';

interface CharacterModalProps {
  character?: CharacterModel;
  onClose: () => void;
}

const renderCharacterOtherNames = (character: CharacterModel) =>
  character.otherNames?.length ? (
    <ul>
      {character.otherNames.map((otherName, index) => (
        <li key={index}>{otherName}</li>
      ))}
    </ul>
  ) : (
    'N/A'
  );

const CharacterModal: FC<CharacterModalProps> = ({ character, onClose }) => {
  const appElement = useContext(AppContext);
  if (!appElement.current) return null;
  if (!character) return null;

  return createPortal(
    <Styled styles={styles}>
      <div className="character-modal-wrapper">
        <Backdrop onClick={onClose} />
        <div role="dialog" className="character-modal">
          <header className="character-modal-header">
            <h3>Character</h3>
            <button onClick={onClose}>
              <XIcon />
            </button>
          </header>

          <div className="character-modal-content">
            <img
              className="character-image"
              alt={character.canonicalName}
              src={character.image.original}
            />

            <RegularSection title="Name" className="character-name">
              {character.canonicalName}
              {character.names && (
                <LanguageDictionaryList values={character.names} />
              )}
            </RegularSection>

            <RegularSection
              title="Other Names"
              className="character-other-names"
            >
              {renderCharacterOtherNames(character)}
            </RegularSection>

            <RegularSection
              title="Description"
              className="character-description"
            >
              {character.description || 'N/A'}
            </RegularSection>
          </div>
        </div>
      </div>
    </Styled>,
    appElement.current
  );
};

export default CharacterModal;
