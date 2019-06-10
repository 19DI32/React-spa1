import React from 'react';
import { shallow } from 'enzyme';
import News from './news';

test('Coins render correctly', () => {
    const component = shallow(<News />);
    expect(component).toMatchSnapshot();
  });