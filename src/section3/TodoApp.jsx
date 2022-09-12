import React, { useState, useCallback } from "react";
import "../App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const getNextTodoId = useCallback(
    () => (todos.length === 0 ? 0 : todos[todos.length - 1].id + 1),
    [todos]
  );

  const deleteAllTodo = useCallback(() => {
    setTodos([]);
  }, []);

  const toggleCompleted = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1 className="font-bold text-2xl">Todo List</h1>
          <button
            className="p-2 text-red-400 border-2 border-red-400 rounded hover:text-white hover:bg-red-200"
            onClick={deleteAllTodo}
          >
            All Delete
          </button>
        </div>
        <TodoForm
          todos={todos}
          setTodos={setTodos}
          getNextTodoId={getNextTodoId}
        />
        <TodoList
          todos={todos}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
