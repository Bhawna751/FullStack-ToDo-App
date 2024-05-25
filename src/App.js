import './App.css';
import React,{useState} from 'react';
import {TodoTable} from "./component/TodoTable";
import NewTodoForm from "./component/NewTodoForm";

function App() {
  const [todos,setTodos]= useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One'}
  ])
  const addTodo=(description,assigned)=>{
    let rowNumber=0;
    if(todos.length>0){
      rowNumber=todos[todos.length-1].rowNumber+1;
    }
    else{
      rowNumber=1;
    }
      const newTodo=
        {rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
        };
        setTodos(todos=>[...todos,newTodo])
    }
  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}> 
          Add new item
          </button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
