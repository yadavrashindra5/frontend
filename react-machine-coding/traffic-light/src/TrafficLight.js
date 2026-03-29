import React, { useEffect, useState } from "react";
import cx from "classnames";
import Light from "./components/Light/Light";

function TrafficLight({ config }) {
  const [currentLight, setCurrentLight] = useState("green");

  useEffect(() => {
    const { duration, next, currentState } = config[currentLight];

    const timerId = setTimeout(() => {
      setCurrentLight(next);
    }, duration);

    return () => clearTimeout(timerId);
  }, [currentLight]);
  return (
    <main>
      <div className="heading">Traffic Light</div>
      <section className="signal">
        {Object.keys(config).map((color) => {
          const backgroundColor =
            color == currentLight ? config[color].color : undefined;
          return <Light key={color} color={backgroundColor} />;
        })}
        <Light />
      </section>
    </main>
  );
}

export default TrafficLight;
