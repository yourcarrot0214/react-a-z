import React from "react";

const todos = [
  { id: 1, content: "당근 심기", completed: true },
  { id: 2, content: "물주기", completed: true },
  { id: 3, content: "놀아주기", completed: false },
];

const CarrotField = () => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );
};

const WiltedField = () => {
  const todolist = () => (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );

  return todolist();
};

const ParentComponent = (props) => {
  return (
    <>
      <h1>ParentComponent</h1>
      {props.children}
    </>
  );
};

export default WiltedField;
