import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  const handleIncrement = () => {
    counterContext.setCount((p) => {
      return p + 1;
    });
  };

  const handleDecrement = () => {
    counterContext.setCount((p) => p - 1);
  };

  return (
    <div style={{ display: "flex", columnGap: "10px", marginBottom: "10px" }}>
      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
