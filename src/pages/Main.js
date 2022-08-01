import { useEffect, useState } from "react";

import Header from "../components/Header/index";
import InputTodo from "../components/InputTodo/index";
import TodoList from "../components/Todo/TodoList";
import { getTodoList } from "../api/todo";
import Notification from "../components/Notification";

const Main = () => {
  const [todoListData, setTodoListData] = useState([]);
  const [showsError, isShowsError] = useState(false);
  const [showsNotification, isShowsNotification] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  const handleCloseError = () => {
    isShowsError(false);
  };

  const handleCloseNotification = () => {
    isShowsNotification(false);
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo
          setTodos={setTodoListData}
          isShowsNotification={isShowsNotification}
        />
        <TodoList
          todos={todoListData}
          setTodos={setTodoListData}
          isShowsError={isShowsError}
        />
      </div>
      {showsError && (
        <Notification
          message="Error: Todo Deletion failed :("
          onClick={handleCloseError}
          isClosed={isShowsError}
        />
      )}
      {showsNotification && (
        <Notification
          message="Please write something ✍️"
          onClick={handleCloseNotification}
          isClosed={isShowsNotification}
        />
      )}
    </div>
  );
};

export default Main;
