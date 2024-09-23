import "./App.css";
import { useRecoilValue } from "recoil";
import { counterState } from "./atom";
import Button from "./Button";

function App() {
  const counter = useRecoilValue(counterState);
  return (
    <>
      <p>Counter Value : {counter}</p>
      <Button />
    </>
  );
}

export default App;
