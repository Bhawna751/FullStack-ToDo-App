import './App.css';
import React,{useState} from 'react';
import {TodoTable} from "./component/TodoTable";
import NewTodoForm from "./component/NewTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);//new state
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
    const deleteTodo = (deleteTodoRowNumber) =>{/*delteTodo should delete a todo item when clicked*/
      let filtered = todos.filter(function (value){
        return value.rowNumber !== deleteTodoRowNumber;
      });
      setTodos(filtered);
    }
  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo = {deleteTodo}/> 
          {/* adding onClick listener on buttuon */}
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'> 
          {/* adding ternary condition, if true then close new todo */}
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {/* doing conditional render, see if showTodoForm is true and if so then render this next piece of code  */}
          {showAddTodoForm && 
            <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
