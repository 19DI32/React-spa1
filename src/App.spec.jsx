import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('Coins render correctly', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });