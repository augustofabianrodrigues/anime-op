import React, { FC } from 'react';
import { mount } from 'enzyme';
import Optional from '../models/Optional';
import useElementSize from './useElementSize';

jest.unmock('./useElementSize');

beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    writable: true,
    value: 1458,
  });

  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    writable: true,
    value: 155,
  });
});

const ElementSizeTestComponent: FC<{ el: Optional<HTMLElement> }> = ({
  el,
}) => {
  const [width, height] = useElementSize(el);

  return React.createElement(
    'div',
    null,
    `
    width: ${width};
    height: ${height};
    `
  );
};

it('returns the expected width', () => {
  const el = document.createElement('div');

  const wrapper = mount(React.createElement(ElementSizeTestComponent, { el }));

  expect(wrapper).toIncludeText('width: 1458');
});

it('returns the expected height', () => {
  const el = document.createElement('div');

  const wrapper = mount(React.createElement(ElementSizeTestComponent, { el }));

  expect(wrapper).toIncludeText('height: 155');
});
