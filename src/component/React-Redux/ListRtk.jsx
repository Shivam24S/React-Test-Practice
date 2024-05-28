import { useDispatch, useSelector } from "react-redux";
import { RtkTodoActions } from "./slicer/RtkTodo";

const ListRtk = () => {
  const data = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(RtkTodoActions.removeTodo(id));
  };

  const handleEdit = (id) => {
    dispatch(RtkTodoActions.editTodo(id));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.task}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListRtk;
