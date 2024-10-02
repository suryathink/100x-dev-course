import { useRecoilValueLoadable } from "recoil";
import { fetchDataSelector } from "./atoms";

function App() {
  const loadable = useRecoilValueLoadable(fetchDataSelector);

  if (loadable.state === "loading") {
    return <div>data is loading...</div>;
  }

  if (loadable.state === "hasError") {
    return <div>Error: Something went wrong</div>;
  }
  return (
    <div>
      {loadable?.contents?.map((ele: any, i: number) => {
        return <div key={i + 1}>{ele.title}</div>;
      })}
    </div>
  );
}

export default App;
