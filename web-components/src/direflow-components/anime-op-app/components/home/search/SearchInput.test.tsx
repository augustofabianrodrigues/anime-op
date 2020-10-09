import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './SearchInput';
import MagnifyingGlassIcon from '../../shared/MagnifyingGlassIcon';
import XIcon from '../../shared/XIcon';

it('calls onChange() when something is typed on the input', () => {
  const fn = jest.fn();
  const wrapper = shallow(<SearchInput value="" onChange={fn} />);

  wrapper.find('.search-input > input').simulate(
    'change', { target: { value: 'something' } });

  expect(fn).toHaveBeenCalled();
});

it('displays the MagnifyingGlass component when no value is present', () => {
  const fn = jest.fn();
  const wrapper = shallow(<SearchInput value="" onChange={fn} />);

  expect(wrapper.contains(<MagnifyingGlassIcon />)).toBeTruthy();
});

it('displays the clear button when value is present', () => {
  const fn = jest.fn();
  const wrapper = shallow(<SearchInput value="Some Value" onChange={fn} />);

  expect(wrapper.contains(<XIcon />)).toBeTruthy();
});
