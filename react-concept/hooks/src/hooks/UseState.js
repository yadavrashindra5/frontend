import React, { useState } from "react";
let x = 0;
function UseState() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);

  return <div>UseState</div>;
}

export default UseState;
