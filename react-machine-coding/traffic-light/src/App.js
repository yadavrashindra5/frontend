import logo from "./logo.svg";
import "./App.css";
import TrafficLight from "./TrafficLight";

function App() {
  const config = {
    red: {
      color: "red",
      duration: 4000,
      next: "yellow",
      currentState: "Stop 🛑",
    },
    yellow: {
      color: "yellow",
      duration: 500,
      next: "green",
      currentState: "Ready ⚠️",
    },
    green: {
      color: "green",
      duration: 3000,
      next: "red",
      currentState: "Go 🟢",
    },
  };

  return (
    <div className="App">
      <TrafficLight config={config} />
    </div>
  );
}

export default App;
