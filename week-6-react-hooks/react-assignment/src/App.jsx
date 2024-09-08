import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTodos = async () => {
    const api = `https://dummyjson.com/todos/random`;
    const response = await (await fetch(api)).json();
    console.log("response", response);
    setTodos([response]);
    setLoading(false);
  };

  useEffect(() => {
    // Initial call to getTodos when the component mounts
    getTodos();

    // Set an interval to call getTodos every 10 seconds
    const intervalId = setInterval(() => {
      getTodos();
    }, 10000); // 10000 milliseconds = 10 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Data is loading...</div>
      ) : (
        todos?.map(({ id, todo, userId }) => (
          <div key={id}>
            <h2>{todo}</h2>
            <p>userId: {userId}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
