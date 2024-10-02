import { selector } from "recoil";
import axios from "axios";

export const fetchDataSelector = selector({
  key: "fetchdata",
  get: async () => {
    try {
      const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });

      await promise;

      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      return "something went wrong";
    }
  },
});
