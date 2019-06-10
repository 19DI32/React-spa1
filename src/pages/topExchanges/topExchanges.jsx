import React from 'react';
import { shallow } from 'enzyme';
import TopExcganges from './topExchanges';

test('Coins render correctly', () => {
    const component = shallow(<TopExcganges />);
    expect(component).toMatchSnapshot();
  });