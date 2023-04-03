import { useState } from "react";
import "./App.css";

import Button from "remoteApp/Button";
import useStore from "remoteApp/store";

function App() {
  const [count, setCount] = useStore();

  return (
    <div className="App">
      <h1>Host Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
