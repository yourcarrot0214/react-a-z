import React, { useCallback, useReducer, useRef } from "react";
import "../App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialState = {
  inputValue: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        inputValue: "",
        todos: state.todos.concat(action.newTodo),
      };
    case "CHANGE_INPUT":
      return {
        ...state,
        inputValue: action.value,
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "DELETE_ALL_TODO":
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(0);
  const { inputValue, todos } = state;

  const deleteAllTodo = useCallback((id) => {
    dispatch({
      type: "DELETE_TODO",
    });
  }, []);

  const toggleCompleted = useCallback((id) => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      id: id,
    });
  }, []);

  const deleteTodo = useCallback((id) => {
    dispatch({
      type: "DELETE_TODO",
      id: id,
    });
  }, []);

  const addTodo = useCallback(
    (event) => {
      event.preventDefault();
      if (state.inputValue === "") return;

      let newTodo = {
        id: nextId.current,
        content: inputValue,
        completed: false,
      };
      dispatch({
        type: "ADD_TODO",
        newTodo: newTodo,
      });
      nextId.current += 1;
    },
    [inputValue]
  );

  const onChangeInputValue = useCallback((event) => {
    dispatch({
      type: "CHANGE_INPUT",
      value: event.target.value,
    });
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
          addTodo={addTodo}
          onChangeInputValue={onChangeInputValue}
          inputValue={inputValue}
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
