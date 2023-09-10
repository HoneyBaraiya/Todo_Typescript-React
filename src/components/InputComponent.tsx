import './style.css';
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void;
}
const InputCompnent=({todo,setTodo,handleAdd}:Props)=>{
    return(
        <form className='input' onSubmit={(e)=>handleAdd(e)}>
            <input type="input" id="input" 
            placeholder="add task" className="txtInput" 
            value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className="btnSubmit" type="submit">GO</button>
        </form>
    )
}
export default InputCompnent;