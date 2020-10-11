import React, { FC } from 'react';
import { Styled } from 'direflow-component';
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

const renderDescription = ({ description }: CharacterDescriptionProps) => {
  return description ? (
    <SanitizeHtml dirty={description} options={options} />
  ) : (
    'N/A'
  );
};

const CharacterDescription: FC<CharacterDescriptionProps> = (props) => {
  return (
    <Styled styles={styles}>
      <RegularSection title="Description" className="character-description">
        {renderDescription(props)}
      </RegularSection>
    </Styled>
  );
};

export default CharacterDescription;
