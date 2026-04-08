// useReducer Hook

import React from "react";
import { useReducer } from "react";

const UseReducer2 = () => {
  // const [state , dispatch] = useReducer(reducer , initialState)

  let initialState = {
    count : 0
  };

  const counterReducer = (state , action) => {
    switch (action.type) {
      case "INCREMENT":
        return {count : state.count + 1}
      case "DECREMENT":
        return {count: state.count - 1};
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const [state, disptch] = useReducer(counterReducer, initialState);

  console.log("state", state);

  return (
    <>
      <div>UseReducer</div>
      <div>count : {state.count}</div>
      <button onClick={() => disptch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => disptch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => disptch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default UseReducer2;
