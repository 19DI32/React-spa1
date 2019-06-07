import React from 'react';
import logo from './logo.svg';
import './Landing.css';


const InputMark = (props)=> {
  return (
    <div className = "inputMark">
      <input placeholder = {props.placeholder}/>
    </div>
  )
}
const AddBtn = (props)=> {
  return (
    <div>
      <button>Add mark</button>
    </div>
  )
}
const InputDate = (props)=> {
  return (
    <div className = "inputDate">
      <input placeholder = {props.placeholder}/>
    </div>
  )
}
const CreateTask = (props)=> {
  return(<div className = "taskCont">
                    <div>{props.date}</div>
                    <div>{props.task}</div>
          </div>)
}


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      items:[]
    };
    this.createList = this.createList.bind(this);
  }
  createList() {
    let obj = {};
    obj.date = document.querySelector(".inputDate input").value;
    obj.task = document.querySelector(".inputMark input").value;
    console.log(obj);
    this.setState({
      items: this.state.items.concat(obj)
    })
  }
  render(){
  return(
    <div className = "LandingContainer">
      <div className = "MarkContainer">
            {
              this.state.items.map(elem=> <CreateTask date = {elem.date} task = {elem.task}/>)
            }
      </div>
      <div className = "InputContainer">
      <InputDate placeholder = "type date"/>
      <InputMark placeholder = "type mark"/>
      </div>
      
    <div>
      <button onClick = {this.createList}>Add mark</button>
    </div>
    </div>
  )
  }
} 

export default Landing;
