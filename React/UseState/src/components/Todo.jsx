import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () =>{
    const [input, setInput] = useState("");
    const [todoList, setTodoList]=useState([]);
    
    const addTask = (e) =>{
        setInput(e.target.value);
    }
    const addTodo =()=>{
        let obj={
            id: new Date().getTime(),
            todo: input,
        }
        let newList = [...todoList, obj];
        setTodoList(newList);
    }
    return(
        <>
            <div>
                <input type="text" onChange={addTask} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div><TodoList tasks={todoList}/></div>
        </>
    )
};

export default Todo;