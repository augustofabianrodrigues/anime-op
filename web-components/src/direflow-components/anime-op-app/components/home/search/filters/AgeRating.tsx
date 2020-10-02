import { Styled } from 'direflow-component';
import React, { FC, useState } from 'react';
import LabeledCheckbox from '../../../shared/LabeledCheckbox';
import styles from './AgeRating.less';
import AgeRatingEnum from './AgeRatingEnum';

const ageRatingLabels = {
  [AgeRatingEnum.GeneralAudiences.toString()]: 'General Audiences',
  [AgeRatingEnum.ParentalGuidanceSuggested.toString()]: 'Parental Guidance Suggest',
  [AgeRatingEnum.Restricted.toString()]: 'Restricted',
};

const AgeRating: FC = () => {
  // TODO: Uplift state
  const [values, setValues] = useState([
    AgeRatingEnum.GeneralAudiences,
    AgeRatingEnum.ParentalGuidanceSuggested,
  ]);

  const handleCheckboxChange = (type: AgeRatingEnum, value: boolean) => {
    setValues((prevValues) =>
      value ? [...prevValues, type] : prevValues.filter((v) => v !== type)
    );
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
