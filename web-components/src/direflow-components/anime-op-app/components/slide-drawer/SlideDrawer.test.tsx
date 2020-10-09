import React from 'react';
import { shallow } from 'enzyme';
import SlideDrawer from './SlideDrawer';

it('adds the "open" class when shown is true', () => {
  const wrapper = shallow(<SlideDrawer show={false} />);
  wrapper.setProps({ show: true });

  expect(wrapper.find('.slide-drawer').hasClass('open')).toBeTruthy();
});
