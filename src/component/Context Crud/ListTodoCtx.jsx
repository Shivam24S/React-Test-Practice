import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const ListTodoCtx = () => {
  const { editTodo, deleteTodo, TodoData } = useContext(TodoContext);

  const handleEdit = (id) => {
    editTodo(id);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {TodoData.map((item) => (
            <tr key={item.id}>
              <td>{item.task}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}> delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodoCtx;
