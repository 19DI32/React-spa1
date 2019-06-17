import React from 'react';
import logo from './logo.svg';
import './Landing.css';
//import validationCheck from '../../hok/validationInput';
import { CreateTask ,InputDate, ControlledInput} from './components';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      items:[],
      errors:"",
      value:"",
      check:true
    };
   // this.createList = this.createList.bind(this);
  }
  validateDate = (str)=> {
           let value = str.split(".");
           console.log(value);
            value[1]=value[1]-1;
            var d = new Date(value[2], value[1], value[0]);
            console.log(d.getFullYear());
               if ((d.getFullYear() == value[2]) && (d.getMonth() == value[1]) && (d.getDate() == value[0])) {
                 this.setState({value:str,check:true});

                 return true;
               } 
               else {
                  this.setState({check:false});
                  return false;
               }
  }
  createList = ()=> {
    let obj = {};
    obj.date = document.querySelector(".inputDate input").value;
    if(this.validateDate(obj.date)){
    obj.task = document.querySelector(".inputMark input").value;
    console.log(obj);
    this.setState({
      items: this.state.items.concat(obj)
    })
  }
  }
  render(){
    if(this.state.check) {
  return(
    <div className = "LandingContainer">
      <div className = "MarkContainer">
            {
              this.state.items.map(elem=> <CreateTask date = {elem.date} task = {elem.task}/>)
            }
      </div>
      
         <div>{this.state.errors}</div>
         <div className = "InputContainer">
         <InputDate placeholder1 = {'for date'} placeholder2 = "your task"/>
      </div>

    <div>
      <button onClick = {this.createList}>Add mark</button>
    </div>
    </div>
  )
  }
  else {
    return(
      <div className = "LandingContainer">
        <div className = "MarkContainer">
              {
                "not valid Date"
              }
        </div>
        
           <div>{this.state.errors}</div>
           <div className = "InputContainer">
           <ControlledInput placeholder1 = {'for date'} placeholder2 = "your task"/>
        </div>
  
      <div>
        <button onClick = {this.createList}>Add mark</button>
      </div>
      </div>
    )   
  }
}
} 

export default Landing;
