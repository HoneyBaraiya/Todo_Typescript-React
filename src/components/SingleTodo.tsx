import React from 'react';
import { TodoModel } from '../model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';

type props={
    todo:TodoModel;
    todos:TodoModel[];
    setTodos:React.Dispatch<React.SetStateAction<string>>;
}

const SingleTodo=({todo,todos,setTodos}:props)=>{
    return(
        <form className='todolist__single'>
            <span className='todolist__single--text'>
                {todo.task}
            </span>
            <div>
                <span className='icon'><AiFillEdit/></span>
                <span className='icon'><AiFillDelete/></span>
                <span className='icon'><MdDone/></span>
            </div>
        </form>
    )
}

export default SingleTodo;