import React from 'react';
import { shallow } from 'enzyme';
import {TopExchanges, TopExchangesData} from './topExchanges';

test('Tops render correctly', () => {
    const component = shallow(<TopExchanges />);
    expect(component).toMatchSnapshot();
  });

test("Check loading", ()=> {
  const component = shallow(<TopExchangesData/>);
  expect(component.state(['isLoading'])).toEqual(true);
})