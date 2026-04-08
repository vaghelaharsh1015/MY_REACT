import "./App.css";
import UseReducer from "./components/UseReducer";
import UseReducer2 from "./components/UseReducer2";
import UseReducer3 from "./components/UseReducer3";
import UseReducer4 from "./components/UseReducer4";


let initialState1 = [{choco: 0} , {icecream:10}];
let initialState2 = [{choco: 0 , icecream:10}];
let initialState3 = [[{choco: 0} , {icecream:10}]];
let initialState4 = [[{choco: 0 , icecream:10}]];


function App() {
  return (
    <>
      {/* <UseReducer initialState={initialState1}/> */}
      {/* <UseReducer2 initialState={initialState2}/> */}
      {/* <UseReducer3 initialState={initialState3}/> */}
      <UseReducer4 initialState={initialState4}/>
    </>
  );
}

export default App;
