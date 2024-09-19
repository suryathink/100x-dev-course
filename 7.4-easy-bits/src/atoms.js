import { atom, selector } from "recoil";

// atoms are like state that stores data

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

/*
a selector is something that can be derived from other atoms or from other selectors.

If you have a bunch of atoms and you know there is value that directly can be derived from 
this, does not depend on any other external source, doesnot depend on any other backend,
then you can simly define this as a selector,

the way to define a elector is to give it a key and give it a value, a value is a function

which gives you access to this `get` object, and here you describe that  how this selector
depends on the other things ,


writing the below logic is very similar to 

`
  const totalNotificationCount = useMemo(() => {
    return (
      Number(networkNotificationCount) +
      Number(jobsAtomCount) +
      Number(messagingAtomCount) +
      Number(notificationAtomCount)
    );
  }, [
    networkNotificationCount,
    jobsAtomCount,
    messagingAtomCount,
    notificationAtomCount,
  ]);
`

if you use get inside this function, recoil understands that the total value depends on
the value of networkAtom or jobsAtom or notificationAtom or messagingAtom.

if anytime value changes in any of the 4 there, then recalculate the value

also it does not causes render again and again, it only recalucuates when any of the four values changes
*/

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messagingAtomCount = get(messagingAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      notificationAtomCount +
      messagingAtomCount
    );
  },
});
