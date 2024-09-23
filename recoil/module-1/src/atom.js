import { atom } from "recoil";

export const counterState = atom({
  key: "counterState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

/*
Create a basic Atom to manage a piece of state (for example, a simple counter).

Render that state in one component and 

create a button in another component to update the atom's state.

*/

/*
Recoil's Rendering Model:
    Recoil optimizes component re-rendering by only updating components 
    that subscribe to specific atoms/selectors.
*/
