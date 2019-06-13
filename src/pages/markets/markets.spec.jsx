import React from 'react';
import { shallow } from 'enzyme';
import {Markets, MarketsData} from './markets';

test('Coins render correctly', () => {
    const component = shallow(<Markets />);
    expect(component).toMatchSnapshot();
  });
test("Loading is true", ()=> {
  const component = shallow(<MarketsData/>);
  expect(component.state(["isLoading"])).toEqual(true);
})