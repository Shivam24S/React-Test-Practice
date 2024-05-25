import AddTodoCtx from "./AddTodoCtx";
import ListTodoCtx from "./ListTodoCtx";
import TodoContextProvider from "./TodoContext";

const CrudCtx = () => {
  return (
    <TodoContextProvider>
      <AddTodoCtx />
      <ListTodoCtx />
    </TodoContextProvider>
  );
};

export default CrudCtx;
