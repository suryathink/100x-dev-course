import "./App.css";
import { useMemo } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  networkAtom,
  jobsAtom,
  notificationAtom,
  messagingAtom,
  totalNotificationSelector,
} from "./atoms.js";

function App() {
  // useRecoilValue -> is used to get the value of a atom
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);

  // useRecoilState -> is similar to useState, it returns current count, and method to set the count
  const [messagingAtomCount, setMessagingAtomCount] =
    useRecoilState(messagingAtom);

  const notificationAtomCount = useRecoilValue(notificationAtom);
  /*
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

  instead of this we will use selectors, below is the code

 */

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // WHY USING SELECTOR APPROACH IS BETTER THAN USEMEMO?
  /*
   using selectors approach is better, because in the future, you have another variable 
   (lets say totalNotification + totalUnrepliedMessage) that depends on the value of 
   totalNotificationSelector and totalUnrepliedMessage count
     

   but if you use usememo, in that case you can't use usememo outside where the other new selector
  ` totalNotificationSelector and totalUnrepliedMessage count` is going to get created in future

  */

  return (
    <>
      <button>Home</button>
      <button>
        {" "}
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
      <button>
        Messaging({messagingAtomCount >= 100 ? "99+" : messagingAtomCount})
      </button>
      <button>
        Notifications (
        {notificationAtomCount >= 100 ? "99+" : notificationAtomCount})
      </button>
      <button>Me( {totalNotificationCount})</button>
    </>
  );
}

export default App;
