import React from 'react';
import { shallow } from 'enzyme';
import SlideDrawer from './SlideDrawer';

it('has a `transform: translateX` style attribute that matches the translateX prop', () => {
  const wrapper = shallow(<SlideDrawer translateX={-320} />);
  let style = wrapper.find('.slide-drawer').prop('style');
  expect(style).toEqual({ transform: 'translateX(-320px)' });

  wrapper.setProps({ translateX: 0 });
  style = wrapper.find('.slide-drawer').prop('style');
  expect(style).toEqual({ transform: 'translateX(0px)' });

  wrapper.setProps({ translateX: -54 });
  style = wrapper.find('.slide-drawer').prop('style');
  expect(style).toEqual({ transform: 'translateX(-54px)' });
});
