import { useState } from "react";
import TodoList from "./TodoList";
import "./styles.css";
const Todo = () => {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
  
    const addTask = (e) => {
      setInput(e.target.value);
    };
  
    const addTodo = () => {
      let obj = {
        id: new Date().getTime(),
        todo: input,
        status: Math.random() < 0.5,
      };
      let newList = [...todoList, obj];
      setTodoList(newList);
      setInput("");
    };
  
    return (
      <div className="todo-app">
        <h1>Todo App</h1>
        <div>
          <input
            type="text"
            value={input}
            onChange={addTask}
            placeholder="Add a new task"
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <div>
          <TodoList tasks={todoList} />
        </div>
      </div>
    );
  };
  
  export default Todo;