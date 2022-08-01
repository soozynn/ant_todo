import { useEffect, useState } from "react";

import Header from "../components/Header/index";
import InputTodo from "../components/InputTodo/index";
import TodoList from "../components/Todo/TodoList";
import { getTodoList } from "../api/todo";

const Main = () => {
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
