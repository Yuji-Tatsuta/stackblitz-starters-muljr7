import React from 'react';
import {useState,useRef} from 'react';
import './style.css';
import TodoList from './TodoList.js'

export default function App() {
  const [todos,setTodos]= useState([
    {id: 1,name:"todo1",completed:false},
  ]);

  const todoNameRef = useRef();
  const hundleAddTodo = () =>{
        const name = todoNameRef.current.value;
        setTodos((prevTodos) => {
          return[...prevTodos,{id: "1",name:name,completed:false}];
        })
        todoNameRef.current.value= null;
  };

  return (
    <>
      <TodoList todos={todos}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={hundleAddTodo}>タスクを追加</button>
      <button>完了したタスクを消去</button>
      <div>残りのタスク:0</div>
    </>
  );
}
