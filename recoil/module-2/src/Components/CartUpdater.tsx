import { useSetRecoilState } from "recoil";
import { cartCount } from "../atoms";

const CartUpdater = () => {
  const setValue = useSetRecoilState(cartCount);

  return (
    <>
      <button
        onClick={() => {
          setValue((prevValue) => prevValue + 1);
        }}
      >
        Increase cart Count
      </button>
      &nbsp; &nbsp;
      <button
        onClick={() => {
          setValue((prevValue) => prevValue - 1);
        }}
      >
        Decrease cart Count
      </button>
    </>
  );
};

export default CartUpdater;
