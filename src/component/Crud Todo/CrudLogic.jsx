import { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

const initialData = [
  {
    id: 1,
    task: "coding",
    description: "coding Practices",
  },
  {
    id: 2,
    task: "play",
    description: "playing Game",
  },
];

const CrudLogic = () => {
  // const [inputData, , setInputData] = useState(initialData);
  const [inputData, setInputData] = useState(initialData);
  const [editData, setEditData] = useState(null);
  const [editId, setEditId] = useState(null);

  const handleAdd = (input) => {
    if (!input.task || !input.description) {
      alert("please enter details");
    } else if (editId !== null) {
      setInputData((prevData) =>
        prevData.map((item) =>
          item.id === editId
            ? { ...item, task: input.task, description: input.description }
            : item
        )
      );
      setEditData(null);
      setEditId(null);
    } else {
      const newData = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
      };
      setInputData((prevData) => [...prevData, newData]);
    }
  };

  const handleDelete = (id) => {
    const updatedData = inputData.filter((item) => item.id !== id);
    setInputData(updatedData);
  };

  const handleEdit = (id) => {
    const editedData = inputData.find((item) => item.id === id);
    setEditData(editedData);
    setEditId(id);
  };

  console.log("input Data", inputData);

  return (
    <>
      <AddTodo onAdd={handleAdd} editValue={editData} />
      <br />
      <ListTodo onDelete={handleDelete} onEdit={handleEdit} data={inputData} />
    </>
  );
};
export default CrudLogic;
