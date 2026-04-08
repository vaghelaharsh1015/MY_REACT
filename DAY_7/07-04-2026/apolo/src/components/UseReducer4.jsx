// useReducer Hook

import React from "react";
import { useReducer } from "react";

const UseReducer4 = ({ initialState }) => {
  // const [state , dispatch] = useReducer(reducer , initialState)

  // let initialState = {
  //   choco: 0,
  //   icecream: 10,
  // };

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return [[{choco: state[0][0].choco + 1 , icecream: state[0][0].icecream + 1 }]];
        
      case "DECREMENT": {
        const choco = state[0][0].choco;
        const icecream = state[0][0].icecream;
        if(choco <= 0 || icecream <= 0){
          return [[{choco : 0 , icecream:10}]]
        }else{
          return [[{choco: choco - 1 , icecream: icecream - 1 }]]
        }
      }
      case "RESET":
        return [[{choco : 0 , icecream:10}]];
      default:
        return state;
    }
  };

  const [state, disptch] = useReducer(counterReducer, initialState);

  console.log("state", state);

  return (
    <>
      <div>UseReducer</div>
      <div>choco : {state[0][0].choco}</div>
      <div>icecream : {state[0][0].icecream}</div>
      <button onClick={() => disptch({ type: "INCREMENT" })}>Increment_choco</button>
      <button onClick={() => disptch({ type: "DECREMENT" })}>Decrement_choco</button>
      <button onClick={() => disptch({ type: "RESET" })}>Reset_choco</button><br></br>
    </>
  );
};

export default UseReducer4;
