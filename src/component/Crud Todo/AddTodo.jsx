import { useEffect, useState } from "react";

const AddTodo = ({ onAdd, editValue }) => {
  const [input, setInput] = useState({
    task: "",
    description: "",
  });

  const handleChange = (identifier, e) => {
    setInput((prevData) => {
      return {
        ...prevData,
        [identifier]: e.target.value,
      };
    });
  };

  //   console.log("inputData", input);

  const handleAdd = () => {
    onAdd(input);
    setInput({ task: "", description: "" });
  };

  useEffect(() => {
    editValue ? setInput(editValue) : null;
  }, [editValue]);

  return (
    <>
      <input
        type="text"
        name="task"
        placeholder="task"
        value={input.task}
        onChange={(e) => {
          handleChange("task", e);
        }}
      />
      <br />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={input.description}
        onChange={(e) => {
          handleChange("description", e);
        }}
      />
      <br />
      <button onClick={handleAdd}>{editValue ? "edit" : "add"}</button>
    </>
  );
};

export default AddTodo;
