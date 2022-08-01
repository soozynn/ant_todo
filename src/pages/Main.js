import { useEffect, useState } from "react";

import Header from "../components/Header/index";
import InputTodo from "../components/InputTodo/index";
import TodoList from "../components/Todo/TodoList";
import { getTodoList } from "../api/todo";
import Notification from "../components/Notification";

const Main = () => {
  const [todoListData, setTodoListData] = useState([]);
  const [showsError, isShowsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getTodoList();
        setTodoListData(data || []);
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to get Todo list :(");
        isShowsError(true);
      }
    })();
  }, []);

  const handleCloseError = () => {
    isShowsError(false);
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo
          setTodos={setTodoListData}
          showsError={showsError}
          isShowsError={isShowsError}
          setErrorMessage={setErrorMessage}
        />
        <TodoList
          todos={todoListData}
          setTodos={setTodoListData}
          isShowsError={isShowsError}
          setErrorMessage={setErrorMessage}
        />
      </div>
      {showsError && (
        <Notification
          message={errorMessage}
          onClick={handleCloseError}
          isClosed={isShowsError}
        />
      )}
    </div>
  );
};

export default Main;
