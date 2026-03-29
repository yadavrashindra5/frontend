import { useRef, useState } from "react";

const UseRef = () => {
  const ref = useRef(0);
  const [state, setState] = useState(0);
  const handleClickListener = (event) => {
    ref.current = ref.current + 1;
    console.log(ref);
  };

  const handleUpdateState = (event) => {
    console.log("handleUpdateState");
    setState((prev) => prev + 1);
  };

  return (
    <div>
      <div>Use Ref {ref.current}</div>
      <button onClick={handleClickListener}>click</button>
      <button onClick={handleUpdateState}>update State</button>
    </div>
  );
};

export default UseRef;
