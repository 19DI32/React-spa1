import React from 'react';
import { shallow } from 'enzyme';
import Markets from './markets';

test('Coins render correctly', () => {
    const component = shallow(<Markets />);
    expect(component).toMatchSnapshot();
  });