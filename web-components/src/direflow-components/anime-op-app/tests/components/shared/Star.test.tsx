import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Star from '../../../components/shared/Star';

jest.mock('../../../utils/generateId');

it('matches snapshot fill ratio of 0.68', () => {
  const renderTree = renderer.create(<Star fillRatio={0.68} />).toJSON();
  expect(renderTree).toMatchSnapshot();
});

it('matches snapshot fill ratio of 0', () => {
  const renderTree = renderer.create(<Star fillRatio={0} />).toJSON();
  expect(renderTree).toMatchSnapshot();
});

it('matches snapshot fill ratio of 0.11', () => {
  const renderTree = renderer.create(<Star fillRatio={0.11} />).toJSON();
  expect(renderTree).toMatchSnapshot();
});

it('matches snapshot fill ratio of 1', () => {
  const renderTree = renderer.create(<Star fillRatio={1} />).toJSON();
  expect(renderTree).toMatchSnapshot();
});
