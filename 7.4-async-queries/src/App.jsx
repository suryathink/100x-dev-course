import "./App.css";
import { useEffect } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "./atoms.js";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  console.log("totalNotificationCount", totalNotificationCount);

  /*
  !Not a good way to do it
  useEffect(() => {
    Fetch data from the server
    fetch("http://localhost:3000/notifications")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json(); // Parse the JSON data
      })
      .then((data) => {
        console.log("data", data); // Log the data
        setNetworkCount(data.data); // Assuming you want to set network count
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 */

  return (
    <>
      <button>Home</button>

      <button>
        My network ({networkCount.network >= 100 ? "99+" : networkCount.network}
        )
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
