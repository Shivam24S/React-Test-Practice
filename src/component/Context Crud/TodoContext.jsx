import { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  addTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  editValue: null,
  TodoData: [],
});

const initialState = [
  {
    id: 1,
    task: "coding",
    description: "learn coding",
  },
  { id: 2, task: "play", description: "Playing Games" },
];

const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState(initialState);

  const [isEdit, setIsEdit] = useState(null);

  const [editValue, setEditValue] = useState(null);

  const addTodo = (input) => {
    if (!input.task || !input.description) {
      alert("please fill the details");
    } else if (isEdit) {
      setTodo((prevData) =>
        prevData.map((item) =>
          item.id === isEdit
            ? { ...item, task: input.task, description: input.description }
            : item
        )
      );
      setEditValue(null);
      setIsEdit(null);
    } else {
      const newData = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
      };
      setTodo((prevData) => [...prevData, newData]);
    }
  };

  const deleteTodo = (id) => {
    const updatedData = todo.filter((item) => item.id !== id);
    setTodo(updatedData);
  };

  const editTodo = (id) => {
    const editedData = todo.find((item) => item.id === id);
    setEditValue(editedData);
    setIsEdit(id);
  };

  const todoCtx = {
    addTodo,
    deleteTodo,
    editTodo,
    editValue,
    TodoData: todo,
  };

  console.log("todo Data", todo);

  return (
    <TodoContext.Provider value={todoCtx}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
