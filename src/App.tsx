import React from 'react';
import { observer } from 'mobx-react';
import getStore from './store/store';
import { addTask } from './actions/task';
import TodoList  from './components/TodoList'

import './App.css';


var taskValue : any;
function addtoTask (value : any) {
   taskValue = value;
  }



function App() {
   const store  = getStore()
  return (
    <div style = {{textAlign : 'center' , marginTop : '20px'}}>
    <input type="text" onChange={(e) => addtoTask(e.target.value)}></input>
    <button onClick={() => addTask(taskValue)}>Add Task</button> 
    <TodoList/>   
    </div>
  );
}

export default App;
