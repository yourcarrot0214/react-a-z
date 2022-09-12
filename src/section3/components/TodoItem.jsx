import React, { useContext } from "react";
import { TodosContext } from "../TodoApp";

const TodoItem = React.memo(({ todo }) => {
  console.log(`${todo.content}`);
  const dispatch = useContext(TodosContext);

  return (
    <div key={todo.id}>
      <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => dispatch({ type: "TOGGLE_COMPLETED", id: todo.id })}
            className="mr-3"
          />
          <span className={todo.completed ? "line-through" : ""}>
            {todo.content}
          </span>
        </div>
        <div className="items-center">
          <button
            className="px-4 py-2 float-right"
            onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
});

export default TodoItem;
