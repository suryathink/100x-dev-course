# Checkpoint 2: Combining Atoms and Selectors for Derived State

## Exercise 2

In this exercise, you will create two atoms to represent the user's cart data and derive the total price using a selector.

### Objectives

1. Create two atoms:

   - **cartItems**: An atom that holds an array of item IDs representing the items in the user's cart.
   - **cartCount**: An atom that holds the count of items in the user's cart.

2. Create a selector that derives the total price from the `cartItems` atom. This selector will fetch the price for each item asynchronously from an API or a mock function.

### Hints

- Consider storing the `cartItems` as an array of item IDs.
- Use a selector to fetch the price of each item and compute the total price based on the fetched data.

### Example Implementation

Here’s a conceptual overview of how you might implement this:

1. **Define Atoms**

   ```tsx
   import { atom } from "recoil";

   export const cartItemsState = atom<number[]>({
     key: "cartItemsState",
     default: [],
   });

   export const cartCountState = atom<number>({
     key: "cartCountState",
     default: 0,
   });
   ```
