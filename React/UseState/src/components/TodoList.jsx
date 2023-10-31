import TodoItem from "./TodoItem";
function TodoList({tasks}){
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
       

        <tbody>
            {
                tasks.map((task)=>(
                    <TodoItem key={task.id} data={task} />

            ))
            }
        </tbody>
        </table>
    )
}

export default TodoList;