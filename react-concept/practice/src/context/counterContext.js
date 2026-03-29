import { createContext, useState } from "react";

export const counterContext = createContext(0);

export default function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
}
