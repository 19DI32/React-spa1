import React from 'react';
import { shallow } from 'enzyme';
import {Coins, Input, CoinList2} from './coins';
//import Input from './coins';
//import CoinList2 from './coins';


test('Coins render correctly', () => {
    const component = shallow(<Coins />);
    expect(component).toMatchSnapshot();
  });
test('check state',()=>{
  //  const component = shallow(<Coins/>);
  //  const component2 = shallow(<Input/>);
    const component3 = shallow(<CoinList2/>);
    const component2 = shallow(<Input handler = {component3.instance().onChange}/>);
    const str = "btn";
    component2.find("input").simulate('change',{target:{value:str}});
    expect(component3.state(['search'])).toEqual(str);
})