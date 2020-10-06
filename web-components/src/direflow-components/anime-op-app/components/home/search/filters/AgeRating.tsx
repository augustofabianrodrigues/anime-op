import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import LabeledCheckbox from '../../../shared/LabeledCheckbox';
import styles from './AgeRating.less';
import AgeRatingEnum from '../../../../models/AgeRatingEnum';

const ageRatingLabels = {
  [AgeRatingEnum.GeneralAudiences.toString()]: 'General Audiences',
  [AgeRatingEnum.ParentalGuidanceSuggested.toString()]: 'Parental Guidance Suggest',
  [AgeRatingEnum.Restricted.toString()]: 'Restricted',
};

interface AgeRatingProps {
  values: AgeRatingEnum[];
  onChange: (values: AgeRatingEnum[]) => void;
}

const AgeRating: FC<AgeRatingProps> = ({ values, onChange }) => {
  const handleCheckboxChange = (type: AgeRatingEnum, value: boolean) => {
    onChange(value ? [...values, type] : values.filter((v) => v !== type));
  };

  const renderCheckbox = (type: AgeRatingEnum) => {
    return (
      <LabeledCheckbox
        label={ageRatingLabels[type]}
        value={values.includes(type)}
        onChange={(value) => handleCheckboxChange(type, value)}
      />
    );
  };

  return (
    <Styled styles={styles}>
      <div className="age-rating">
        <h3>Age Rating</h3>

        {renderCheckbox(AgeRatingEnum.GeneralAudiences)}
        {renderCheckbox(AgeRatingEnum.ParentalGuidanceSuggested)}
        {renderCheckbox(AgeRatingEnum.Restricted)}
      </div>
    </Styled>
  );
};

export default AgeRating;
