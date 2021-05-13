import "./App.css";
import React, { useReducer } from "react";
// import ClassCounter from "./componenets/ClassCounter";
// import HookCounter from "./componenets/HookCounter";
// import HookCounterThree from "./componenets/HookCounterThree";
// import HookCounterTwo from "./componenets/HookCounterTwo";
// import HooksCounterFour from "./componenets/HooksCounterFour";
// import HookCounterOne from "./component_useEffect/HookCounterOne";
// import HookMouse from "./component_useEffect/HookMouse";
// import IntervalHookCounter from "./component_useEffect/IntervalHookCounter";
// import MouseContainer from "./component_useEffect/MouseContainer";
// import DataFetching from "./data_fetching_useEffect/DataFetching";
// import ComponentC from "./useContext_Hook/ComponentC";
// import CounterOne from "./useReducer_hook/CounterOne";
// import CounterTwo from "./useReducer_hook/CounterTwo";
// import CounterThree from "./useReducer_hook/CounterThree";
import ComponentA from "./useReducer_with_useContext/ComponentA";
import ComponentB from "./useReducer_with_useContext/ComponentB";
import ComponentC from "./useReducer_with_useContext/ComponentC";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
  {
    /* <CounterThree /> */
  }
  {
    /* <CounterTwo /> */
  }
  {
    /* <CounterOne /> */
  }
  {
    /* <UserContext.Provider value={"Rohit"}>
        <ChannelContext.Provider value={"Kumar"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */
  }
  {
    /* <DataFetching /> */
  }
  {
    /* <IntervalHookCounter /> */
  }
  {
    /* <MouseContainer /> */
  }
  {
    /* <HookMouse /> */
  }
  {
    /* <HookCounterOne /> */
  }
  {
    /* <HooksCounterFour /> */
  }
  {
    /* <HookCounterThree /> */
  }
  {
    /* <HookCounterTwo /> */
  }
  {
    /* <HookCounter /> */
  }
  {
    /* <ClassCounter /> */
  }
  {
    /* </div> */
  }
  // );
}

export default App;
