import TodoItem from "./TodoItem"

import "./styles.css";

function TodoList({ tasks }) {
  return (
    <table className="todo-list">
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <TodoItem key={task.id} data={task} />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;