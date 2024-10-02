import "./App.css";
import { useRecoilValue } from "recoil";
import { cartCount, totalPrice } from "./atoms.ts";
import CartUpdater from "./Components/CartUpdater.tsx";

function App() {
  const cartValue = useRecoilValue(cartCount);
  const totalPriceValue = useRecoilValue(totalPrice);

  return (
    <div>
      <p>Cart Value {cartValue} </p>
      <p>Total Price {totalPriceValue}</p>

      <CartUpdater />
    </div>
  );
}

export default App;
