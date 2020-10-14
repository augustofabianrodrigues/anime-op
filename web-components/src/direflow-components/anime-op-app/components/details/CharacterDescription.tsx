import React, { FC, useRef, useState } from 'react';
import { Styled } from 'direflow-component';
import classNames from 'classnames';
import styles from './CharacterDescription.less';
import RegularSection from './RegularSection';
import SanitizeHtml from '../shared/SanitizeHtml';
import {
  IOptions as SanitizeHtmlOptions,
  defaults as sanitizeHtmlDefaults,
} from 'sanitize-html';

interface CharacterDescriptionProps {
  description?: string;
}

const options: SanitizeHtmlOptions = {
  allowedAttributes: {
    ...sanitizeHtmlDefaults.allowedAttributes,
    span: ['class'],
  },
};

const CharacterDescription: FC<CharacterDescriptionProps> = ({
  description,
}) => {
  const [showSpoilers, setShowSpoilers] = useState(false);

  const descriptionElement = useRef<HTMLDivElement>(null);
  const hasSpoilers =
    descriptionElement.current !== null &&
    descriptionElement.current.querySelectorAll('.spoiler').length !== 0;

  return (
    <Styled styles={styles}>
      <RegularSection
        title="Description"
        className={classNames('character-description', {
          'show-spoilers': showSpoilers,
        })}
      >
        {hasSpoilers && (
          <div className="actions">
            <button
              className="show-spoilers-btn"
              type="button"
              onClick={() => setShowSpoilers(!showSpoilers)}
            >
              {showSpoilers ? 'Hide' : 'Show'} Spoilers
            </button>
          </div>
        )}

        {description ? (
          <SanitizeHtml
            ref={descriptionElement}
            dirty={description}
            options={options}
          />
        ) : (
          'N/A'
        )}
      </RegularSection>
    </Styled>
  );
};

export default CharacterDescription;
