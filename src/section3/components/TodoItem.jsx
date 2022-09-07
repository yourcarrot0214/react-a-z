import React, { useCallback } from "react";

const TodoItem = React.memo((props) => {
  const { todo, toggleCompleted, deleteTodo } = props;
  console.log(`${todo.content} render`);

  return (
    <div key={todo.id}>
      <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => toggleCompleted(todo.id)}
            className="mr-3"
          />
          <span className={todo.completed ? "line-through" : ""}>
            {todo.content}
          </span>
        </div>
        <div className="items-center">
          <button
            className="px-4 py-2 float-right"
            onClick={() => deleteTodo(todo.id)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
});

export default TodoItem;
