import React from 'react';

export default function Todo({todo}) {
  return (
  <div>
    <label>
      <input type="checkbox" checked={todo.completed} readOnly/>
    </label>
    {todo.name}
    </div>
  );
};