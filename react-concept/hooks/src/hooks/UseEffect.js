import { useEffect, useState } from "react";

const UseEffect = () => {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("cleanup function");
    };
  });
  return (
    <button
      onClick={() => {
        setClickCount((prev) => prev + 1);
      }}
    >
      Use Effect
    </button>
  );
};

export default UseEffect;
