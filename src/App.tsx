import React,{ useState } from 'react'
import './App.css'

import InputCompnent from './components/InputComponent'
import { TodoModel } from './model';
import TodoList from './components/TodoList';


const App:React.FC=()=>{

  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<TodoModel[]>([]);


  const handleAdd=(e:React.FormEvent<EventTarget>)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),task:todo,isDone:false}]);
      setTodo("");
    }

  }

  return(
    <main className="App">
      <span className="heading">Task list</span>
      <InputCompnent todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      
    </main>
  )
}
export default App;