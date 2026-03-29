import React, { lazy, useState } from "react";

const Counter = lazy(() => import("./components/counter/Counter"));

function App() {
  const [isCounterVisible, setCounterVisible] = useState(false);
  return (
    <div>
      <h1>Application</h1>
      <button onClick={() => setCounterVisible(true)}>render counter</button>
      {isCounterVisible && <Counter />}
    </div>
  );
}

export default App;
