// import { couterInstance } from "./statemanagement/contextapi/couter";

import { useContext, useEffect } from "react";
import { counterContext } from "./context/counterContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/user/userActions";

//context api

// function Counter() {
//   const { counter, setCounter } = useContext(couterInstance);
//   console.log("Hello wolrd");
//   return (
//     <>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>Incremente</button>
//       <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//     </>
//   );
// }

//redux

// function Counter() {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <h1>Counter {counter}</h1>
//       <button
//         onClick={() =>
//           dispatch({ type: "INCREMENT", payload: { name: "rasindra" } })
//         }
//       >
//         Increment
//       </button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//     </>
//   );
// }

//redux toolkits

function User() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  if (loading) return <div>loading</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>{d.title}</div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
