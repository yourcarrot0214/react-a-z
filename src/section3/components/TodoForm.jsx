import React, { useState, useEffect } from "react";

const TodoForm = React.memo((props) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (inputValue === "") return;

    let newTodo = {
      id: props.getNextTodoId(),
      content: inputValue,
      completed: false,
    };

    props.setTodos([...props.todos, newTodo]);
    setInputValue("");
  };

  return (
    <form className="flex pt-2" onSubmit={addTodo}>
      <input
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        type="text"
        value={inputValue}
        placeholder="Enter your todo"
        name="input-value"
        onChange={onChangeInputValue}
      />
      <input
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        type="submit"
        value="Add"
      />
    </form>
  );
});

export default TodoForm;
