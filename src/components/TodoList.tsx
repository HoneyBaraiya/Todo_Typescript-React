import React from 'react';
import './style.css'
import { TodoModel } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
    todos:TodoModel[];
    setTodos:React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const TodoList:React.FC<Props>=({todos,setTodos}:Props)=>{
    return(
        <div className='todolist'>
            {
                todos.map((t)=>(
                    <SingleTodo todo={t} key={t.id} todos={todos} setTodos={setTodos}/> 
                ))
            }
        </div>
    )
}
export default TodoList;