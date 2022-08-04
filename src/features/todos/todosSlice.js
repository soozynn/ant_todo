import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getTodoList } from "../../api/todo";

export const getTodos = createAsyncThunk("todos/fetchByTodos", async () => {
  try {
    const { data } = await getTodoList();
    return data;
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    openError: (state, action) => {
      state.errorMessage = action.payload;
      state.isError = true;
    },
    closeError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        if (state.todos.length) return;
        state.todos.push(...action.payload);
      })
      .addCase(getTodos.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = "Failed to get Todo list :(";
      });
  },
});

export const { addTodo, removeTodo, openError, closeError } =
  todosSlice.actions;

export default todosSlice.reducer;
