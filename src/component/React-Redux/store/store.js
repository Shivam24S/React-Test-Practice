import { configureStore } from "@reduxjs/toolkit";
import RtkTodo from "../slicer/RtkTodo";

const store = configureStore({
  reducer: {
    todo: RtkTodo,
  },
});

export default store;
