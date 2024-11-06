import { createSlice } from "@reduxjs/toolkit";

type todoState = {
  todos: string[];
};

const initialState: todoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, { payload }: { payload: string }) => {
      state.todos.push(payload);
    },
    deleteTodo: (state, { payload }) => {},
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice;
