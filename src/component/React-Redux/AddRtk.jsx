import { useDispatch, useSelector } from "react-redux";
import { RtkTodoActions } from "./slicer/RtkTodo";
import { useEffect, useRef } from "react";

const AddRtk = () => {
  const taskRef = useRef();

  const descriptionRef = useRef();

  const editValue = useSelector((state) => state.todo.editValue);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const inputData = new FormData(form);
    const data = Object.fromEntries(inputData.entries());

    // console.log("data", data);
    // console.log("task", data.task);
    // console.log("description", data.description);

    dispatch(
      RtkTodoActions.addTodo({
        id: new Date().getTime(),
        task: data.task,
        description: data.description,
      })
    );
    taskRef.current.value = "";
    descriptionRef.current.value = "";
  };

  useEffect(() => {
    if (editValue) {
      taskRef.current.value = editValue.task;
      descriptionRef.current.value = editValue.description;
    }
  }, [editValue]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Task" ref={taskRef} />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Description"
          ref={descriptionRef}
        />
        <br />
        <button>{editValue ? "update" : "add"}</button>
      </form>
    </>
  );
};

export default AddRtk;
