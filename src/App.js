import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [],
    inputValue: "",
  };
  getId() {
    return this.todos.length === 0
      ? 0
      : this.state.todos[this.state.todos.length - 1].id + 1;
  }
  deleteTodo(id) {
    let newTodoData = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodoData });
  }
  addTodo(event) {
    event.preventDefault();
    let newTodo = {
      id: this.getId(),
      content: this.state.inputValue,
      completed: false,
    };

    this.setState({ todos: [...this.state.todos, newTodo], inputValue: "" });
  }
  onChangeInputValue(event) {
    this.setState({ inputValue: event.target.value });
  }
  toggleCompleted(id) {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  }
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>Todo List</h1>
          </div>
          <form
            className="input-form"
            onSubmit={(event) => this.addTodo(event)}
          >
            <input
              type="text"
              value={this.state.inputValue}
              placeholder="Enter your todo"
              name="input-value"
              onChange={(event) => this.onChangeInputValue(event)}
            />
            <input type="submit" value="Add" />
          </form>
          {this.state.todos.map((todo) => (
            <div
              className={todo.completed ? "completed-todo-style" : "todo-style"}
              key={todo.id}
            >
              <p>
                <input
                  type="checkbox"
                  defaultChecked={todo.completed}
                  onChange={() => this.toggleCompleted(todo.id)}
                />
                {todo.content}
                <button
                  className="btnStyle"
                  onClick={() => this.deleteTodo(todo.id)}
                >
                  x
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
