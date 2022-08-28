import './App.css';
import{useState,useEffect} from 'react';
import TodoList from './comps/TodoList';
import Form from './comps/Form';
import Footer from './comps/Footer';

function App() {

  const [todos,setTodos]=useState([])
  const[status,setStatus]=useState("")
  const[filteredTodos,setFilteredTodos]=useState([])

  useEffect(()=>{
    const filterHandler=()=>{
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'active':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos)
          break;    
      }
    }

    filterHandler()
  },[todos,status])

  return (
    <div className="todoapp">
      <Form todos={todos} setTodos={setTodos} todo={todos.todo}/>
      <ul className='todo-list'>
        {filteredTodos.map((todo)=>(
          <TodoList
          status={status}
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          text={todo.text}
          />
        ))}
      </ul>
        <Footer
        status={status}
        setStatus={setStatus}
        todos={todos}
        setTodos={setTodos}
        />
    
    </div>
  );
}

export default App;
