import React from 'react';
import Todo from './Todo.js'

export default function TodoList({todos}) {
  return todos.map((todo) => <Todo todo={todo} key={todo} />);
};