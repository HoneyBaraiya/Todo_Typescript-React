import React,{useEffect, useRef, useState} from 'react';
import { TodoModel } from '../model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';

type prop={
    todo:TodoModel;
    todos:TodoModel[];
    setTodos:React.Dispatch<React.SetStateAction<string>>;
}

const SingleTodo=({todo,todos,setTodos})=>{

    const [edit,setEdit]=useState<boolean>(false);
    const [editTodo,setEditTodo]=useState<string>(todo.task)
    
    //to focus in input while i am click on edit
    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])

    const handleDone=(id:number)=>{
        setTodos(
            todos.map((todo:TodoModel)=>todo.id===id?{...todo,isDone : !todo.isDone}:todo)
        );
    }
    const handleDelete=(id:number)=>{
        console.log(id);
        setTodos(todos.filter((todo:TodoModel)=>todo.id!==id));
    }

    const handleEdit=(e:React.FormEvent<HTMLFormElement>,id:number)=>{
        e.preventDefault();
        setTodos(todos.map((todo)=>(
            todo.id===id?{...todo,task:editTodo}:todo
        )))
        setEdit(false);
    } 
    return(
        <form className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>
            
            {
                edit
                ?
                    <input type='input' className='todos__single--text' value={editTodo} onChange={(e)=>setEditTodo(e.target.value) }/>
                
                : 
                (
                    todo.isDone?(
                    <s className='todos__single--text'> {todo.task}</s>
                    ):(
                        <span className='todos__single--text'> {todo.task}</span>
                    )
                )
                
            }

            
            <div>
                <span className='icon' onClick={()=>{
                    if(!edit && todo.isDone===false) 
                        setEdit(!edit);
                }}><AiFillEdit/></span>
                <span className='icon' onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
                <span className='icon' onClick={()=>handleDone(todo.id)}><MdDone/></span>
            </div>
        </form>
    )
    }


export default SingleTodo;