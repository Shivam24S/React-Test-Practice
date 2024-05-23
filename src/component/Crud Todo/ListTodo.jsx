const ListTodo = ({ data, onDelete, onEdit }) => {
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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.task}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => onEdit(item.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodo;
