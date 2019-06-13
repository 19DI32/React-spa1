import React from 'react';
import { shallow } from 'enzyme';
import {News, NewsList} from './news';

test('Coins render correctly', () => {
    const component = shallow(<News />);
    expect(component).toMatchSnapshot();
  });
test('Check error', ()=> {
  const component = shallow(<NewsList/>);
  expect(component.state(["error"])).toEqual(null);
})