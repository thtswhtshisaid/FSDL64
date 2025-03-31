import React, { useState } from "react";
import Greeting from "./Greeting";

function App() {
  const [name, setName] = useState("React User");

  return (
    <div>
      <h1>Welcome to React Basics</h1>
      <Greeting name={name} />
      <button onClick={() => setName("Ryan")}>Change Name</button>
    </div>
  );
}

export default App;