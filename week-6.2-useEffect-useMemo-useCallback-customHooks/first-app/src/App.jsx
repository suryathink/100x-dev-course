import "./App.css";
import { useState, useMemo } from "react";

/*
PROBLEM STATEMENT 

If I ask you to create an app that does two things:

Increases a counter by 1
Lets the user put a value in an input box (n), and you need to show the sum from 1 to n.
One restriction: everything needs to be inside App.

*/

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
      count = count + i;
    }
    return count;
  }, [inputValue]);

  return (
    <div>
      <input
        type="number"
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder="Find sum from 1 to n"
      />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button type="number" onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
