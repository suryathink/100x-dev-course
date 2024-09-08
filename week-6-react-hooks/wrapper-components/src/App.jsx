import "./App.css";

function App() {
  return (
    <>
      <CardWrapper>
        <div>
          <p>hi there</p>
        </div>
      </CardWrapper>
      <CardWrapper>
        <div>
          <h2>hello there</h2>
        </div>
      </CardWrapper>
    </>
  );
}

// CardWrapper -> need to accept some react component as input and then render that react component here inside with some extra styles
// eslint-disable-next-line react/prop-types
function CardWrapper({ children }) {
  console.log("children", children);
  // create a div which has a border (2 px solid black)
  // and inside the div, renders the prop
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
}
export default App;
