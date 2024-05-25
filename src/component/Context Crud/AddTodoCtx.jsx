import { useContext, useEffect, useRef } from "react";
import { TodoContext } from "./TodoContext";

const AddTodoCtx = () => {
  const { addTodo, editValue } = useContext(TodoContext);

  const handleInputData = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = new FormData(form);

    const formData = Object.fromEntries(data.entries());

    console.log("formData", formData);
    addTodo(formData);
    taskRef.current.value = "";
    descriptionRef.current.value = "";
  };

  useEffect(() => {
    if (editValue) {
      taskRef.current.value = editValue.task;
      descriptionRef.current.value = editValue.description;
    }

    console.log("editValue", editValue);
  }, [editValue]);

  const taskRef = useRef();

  const descriptionRef = useRef();

  return (
    <>
      <form onSubmit={handleInputData}>
        <input
          type="text"
          name="task"
          placeholder="Task"
          required
          ref={taskRef}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
          ref={descriptionRef}
        />
        <br />
        <button>{editValue ? "update" : "Add"}</button>
      </form>
    </>
  );
};

export default AddTodoCtx;
