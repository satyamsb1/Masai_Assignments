
import "./styles.css";

function TodoItem({ data }) {
    return (
      <tr>
        <td>{data.todo}</td>
        <td style={{color:data.status? "green":"red"}}>{data.status? "True" : "False"}</td>
      </tr>
    );
  }
  

export default TodoItem