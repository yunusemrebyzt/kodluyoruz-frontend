import React from 'react'
import { useState, useEffect } from 'react';

function TodoList({ todo, todos, setTodos }) {

  const isCompleted = () =>
    setTodos(todos.map((item) => (
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    )))
  const deleteItem = () => setTodos(todos.filter(item => item.id !== todo.id))
  return (
    <div className='main'>
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className='view'>
          <input type="checkbox" className='toggle' onClick={isCompleted} />
          <label >{todo.text}</label>
          <button className='destroy' onClick={deleteItem}></button>
        </div>
      </li>
    </div>
  )
}

export default TodoList