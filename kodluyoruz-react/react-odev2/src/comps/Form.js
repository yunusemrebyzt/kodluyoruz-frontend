import React from 'react'
import { useState, useEffect } from 'react';

function Form({ todos, setTodos, todo }) {

  const [form, setForm] = useState([])
  const onChangeForm = (e) => { setForm(e.target.value) }

  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (e.value === "") {
      alert("Lütfen boş bırakmayınız!")
      return false;
    }

    setTodos([...todos,{text : form, completed : false, id : Math.random() * 1000}])

    setForm('');
  }
  return (
    <div>
      <header>
        <h1>todos</h1>
        <form>
          <input className='new-todo' value={form} placeholder="What needs to be done?" autoFocus onChange={onChangeForm} />
          <button onClick={onSubmitTodo}></button>
        </form>

      </header>
    </div>
  )
}

export default Form