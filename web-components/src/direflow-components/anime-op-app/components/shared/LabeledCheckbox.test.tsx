import React from 'react';
import { mount, shallow } from 'enzyme';
import LabeledCheckbox from './LabeledCheckbox';

it('sets the input value to false when value is false', () => {
  const wrapper = shallow(
    <LabeledCheckbox label="Test" value={false} onChange={jest.fn()} />
  );

  expect(
    wrapper
      .find('.labeled-checkbox > .labeled-checkbox-control > input')
      .prop('checked')
  ).toBeFalsy();
});

it("control display isn't active when value is false", () => {
  const wrapper = shallow(
    <LabeledCheckbox label="Test" value={false} onChange={jest.fn()} />
  );

  expect(
    wrapper
      .find('.labeled-checkbox > .labeled-checkbox-control')
      .hasClass('active')
  ).toBeFalsy();
});

it('sets the input value to true when value is true', () => {
  const wrapper = shallow(
    <LabeledCheckbox label="Test" value={true} onChange={jest.fn()} />
  );

  expect(
    wrapper
      .find('.labeled-checkbox > .labeled-checkbox-control > input')
      .prop('checked')
  ).toBeTruthy();
});

it("control display is active when value is true", () => {
  const wrapper = shallow(
    <LabeledCheckbox label="Test" value={true} onChange={jest.fn()} />
  );

  expect(
    wrapper
      .find('.labeled-checkbox > .labeled-checkbox-control')
      .hasClass('active')
  ).toBeTruthy();
});

it('calls onChange when the wrapper div is clicked', () => {
  const fn = jest.fn();
  const wrapper = shallow(
    <LabeledCheckbox label="Test" value={true} onChange={fn} />
  );

  wrapper.find('.labeled-checkbox').simulate('click');
  expect(fn).toHaveBeenCalled();
});

it('calls onChange when the checkbox control is clicked', () => {
  const fn = jest.fn();
  const wrapper = mount(
    <LabeledCheckbox label="Test" value={true} onChange={fn} />
  );

  wrapper
    .find('.labeled-checkbox > .labeled-checkbox-control')
    .simulate('click');
  expect(fn).toHaveBeenCalled();
});

it('calls onChange when the checkbox input is clicked', () => {
  const fn = jest.fn();
  const wrapper = mount(
    <LabeledCheckbox label="Test" value={true} onChange={fn} />
  );

  wrapper
    .find('.labeled-checkbox > .labeled-checkbox-control > input')
    .simulate('click');
  expect(fn).toHaveBeenCalled();
});

it('calls onChange when the label is clicked', () => {
  const fn = jest.fn();
  const wrapper = mount(
    <LabeledCheckbox label="Test" value={true} onChange={fn} />
  );

  wrapper.find('.labeled-checkbox > label').simulate('click');
  expect(fn).toHaveBeenCalled();
});
