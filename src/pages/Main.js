import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeError, getTodos } from "../features/todos/todosSlice";
import Header from "../components/Header/index";
import InputTodo from "../components/InputTodo/index";
import TodoList from "../components/Todo/TodoList";
import Notification from "../components/Notification";

const Main = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleCloseError = () => {
    dispatch(closeError());
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo />
        <TodoList />
      </div>
      {todos.isError && (
        <Notification
          message={todos.errorMessage}
          onClick={handleCloseError}
          isClosed={todos.isError}
        />
      )}
      {todos.isLoading && <div>Todo를 불러오는 중...</div>}
    </div>
  );
};

export default Main;
