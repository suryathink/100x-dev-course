import { atom, selector } from "recoil";
export const ITEM_PRICE = 10;

export const cartCount = atom({
  key: "cartCount",
  default: 0,
  effects: [
    ({ setSelf, onSet }) => {
      const cartCount = localStorage.getItem("cartCount");

      if (cartCount) {
        setSelf(JSON.parse(cartCount));
      } else {
        setSelf(0);
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("cartCount")
          : localStorage.setItem("cartCount", JSON.stringify(newValue));
      });
    },
  ],
});

export const totalPrice = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const cartCountValue: number = get(cartCount);
    return cartCountValue * ITEM_PRICE;
  },
});
