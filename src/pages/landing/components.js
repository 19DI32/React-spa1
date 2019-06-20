import React from 'react';
import stylyshInput from '../../HOC/stylyshInput';

// export const InputMark = (props)=> {
//     return (
//       <div className = "inputMark">
//         <input placeholder = {props.placeholder}/>
//       </div>
//     )
//   }
 
  const AddBtn = (props)=> {
    return (
      <div>
        <button>Add mark</button>
      </div>
    )
  }
export const InputDate = (props)=> {
    return (
        <div>
              <div className = "inputDate">
                       <input placeholder = {props.placeholder1}/>
              </div>
              <div className = "inputMark">
                      <input placeholder = {props.placeholder2}/>
              </div>
    </div>
    )
  }
 
export  const CreateTask = (props)=> {
    return(<div className = "taskCont">
                      <div>{props.date}</div>
                      <div>{props.task}</div>
            </div>)
  }

  export const ControlledInput = stylyshInput(InputDate);

  