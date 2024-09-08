import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Surya");

  function updateName() {
    setName(`My Name is ${Math.random()}`);
  }

  /*
  here re-render happens only at 2 place

  1.here the parent component will re-render(because state is defined here 
   and state is getting changed here)
  
  2.and that header whose props is getting changed that component will re-render


  */
  return (
    <div>
      <h2> Hello World</h2>

      <button onClick={updateName}>Change the First title</button>

      <Header title={name} />
      <Header title="Hi Aman" />
      <Header title="Hi Puja" />
      <Header title="Hi Pandey" />
      <Header title="Hi Pandey 1" />
      <Header title="Hi Pandey 2" />
      <Header title="Hi Pandey 3" />
      <Header title="Hi Pandey 4" />
      <Header title="Hi Pandey 5" />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
