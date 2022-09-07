import React, { useCallback } from "react";
import TodoItem from "./TodoItem";

const TodoList = React.memo((props) => {
  const { todos, toggleCompleted, deleteTodo } = props;

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
});

export default TodoList;
