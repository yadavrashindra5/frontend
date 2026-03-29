import "./App.css";
import Counter from "./components/Counter";
import { useContext } from "react";
import { CounterContext } from "./context/Counter";
import DropDown from "./components/DropDown";



function App() {
  const counterState = useContext(CounterContext);
  return (
    <>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <DropDown />
    </>
  );
}

export default App;
