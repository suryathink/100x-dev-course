import "./App.css";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  networkAtom,
  jobsAtom,
  notificationAtom,
  messagingAtom,
} from "./atoms.js";

function App() {
  // useRecoilValue -> is used to get the value of a atom
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);

  // useRecoilState -> is similar to useState, it returns current count, and method to set the count
  const [messagingAtomCount, setMessagingAtomCount] =
    useRecoilState(messagingAtom);

  const notificationAtomCount = useRecoilValue(notificationAtom);
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
      <button
        onClick={() => {
          setMessagingAtomCount(messagingAtomCount + 1);
        }}
      >
        Me
      </button>
    </>
  );
}

export default App;
