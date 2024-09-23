import { useSetRecoilState } from "recoil";
import { counterState } from "./atom";
import { useCallback } from "react";

const Button = () => {
  const setValue = useSetRecoilState(counterState);

  /*
   Re-render Check: useSetRecoilState does not trigger a re-render 
   of the Button component when counterState changes.
   This is great because only the components consuming the 
   counterState value (in this case, App) will re-render. 
   The Button component will only re-render if its internal
   props/state changes, which won’t happen here.
  */

  const increment = useCallback(() => {
    setValue((prevValue) => prevValue + 1);
  }, [setValue]);

  const decrement = useCallback(() => {
    setValue((prevValue) => prevValue - 1);
  }, [setValue]);

  return (
    <div>
      <button onClick={increment}>Increase Value</button>
      <button onClick={decrement}>Decrease Value</button>
    </div>
  );
};

export default Button;
