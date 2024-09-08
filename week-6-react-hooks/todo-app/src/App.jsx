import "./App.css";
import { useState } from "react";

let globalValue = 5;
function App() {
  const todo = [
    {
      id: 1,
      title: "grocery",
      description: "buy grocery",
    },
    {
      id: 2,
      title: "date",
      description: "go on a date",
    },
    {
      id: 3,
      title: "have pizza",
      description: "have pizza on date",
    },
  ];

  const [todos, setTodos] = useState([...todo]);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: globalValue++,
        title: "Hard coded values",
        description: "lets hardcode this as well",
      },
    ]);
  };
  return (
    <div>
      <h3>Todos App</h3>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo) => Todo(todo))}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Todo({ id, title, description }) {
  return (
    <div key={id}>
      title: {title}
      <br />
      description: {description}
    </div>
  );
}

export default App;
