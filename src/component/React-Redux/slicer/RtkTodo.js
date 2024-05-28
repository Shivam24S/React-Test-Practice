import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      task: "coding",
      description: "coding practice",
    },
    {
      id: 2,
      task: "play",
      description: "play games",
    },
  ],
  editValue: null,
};

const RtkTodo = createSlice({
  name: "RtkTodo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { task, description } = action.payload;
      if (!task || !description) {
        alert("Please fill in all details.");
      } else if (state.editValue) {
        const index = state.todos.findIndex(
          (todo) => todo.id === state.editValue.id
        );
        if (index !== -1) {
          state.todos[index].task = task;
          state.todos[index].description = description;
        }
        state.editValue = null;
      } else {
        state.todos.push(action.payload);
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const todoToEdit = state.todos.find((item) => item.id === action.payload);
      state.editValue = todoToEdit;
    },
  },
});

export const RtkTodoActions = RtkTodo.actions;

export default RtkTodo.reducer;
