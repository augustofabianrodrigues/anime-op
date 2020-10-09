import React from 'react';
import renderer from 'react-test-renderer';
import StarsRating from './StarsRating';

it('matches snapshot of 4.44 stars with an averageRating of 88.8', () => {
  const renderTree = renderer
    .create(<StarsRating averageRating={88.8} />)
    .toJSON();
  expect(renderTree).toMatchSnapshot();
});

it('matches snapshot of 5.0 stars with an averageRating of 100', () => {
  const renderTree = renderer
    .create(<StarsRating averageRating={100} />)
    .toJSON();
  expect(renderTree).toMatchSnapshot();
});

it('matches snapshot of 0.63 stars with an averageRating of 12.6', () => {
  const renderTree = renderer
    .create(<StarsRating averageRating={12.6} />)
    .toJSON();
  expect(renderTree).toMatchSnapshot();
});
