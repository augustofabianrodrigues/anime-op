import React from 'react';
import renderer from 'react-test-renderer';
import AgeRatingEnum from '../../../../models/AgeRatingEnum';
import AgeRating from './AgeRating';

it('matches snapshot of unchecked General Audiences, Parental Guidance Suggest, and Restricted', () => {
  const renderTree = renderer
    .create(<AgeRating values={[]} onChange={() => {}} />)
    .toJSON();
  expect(renderTree).toMatchSnapshot();
});

it('matches snapshot of unchecked General Audiences, and Parental Guidance Suggest and checked Restricted', () => {
  const renderTree = renderer
    .create(
      <AgeRating values={[AgeRatingEnum.Restricted]} onChange={() => {}} />
    )
    .toJSON();
  expect(renderTree).toMatchSnapshot();
});
