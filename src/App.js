import "./App.css";
import React from "react";
import ClassCounter from "./componenets/ClassCounter";
import HookCounter from "./componenets/HookCounter";
import HookCounterThree from "./componenets/HookCounterThree";
import HookCounterTwo from "./componenets/HookCounterTwo";
import HooksCounterFour from "./componenets/HooksCounterFour";
import HookCounterOne from "./component_useEffect/HookCounterOne";
import HookMouse from "./component_useEffect/HookMouse";
import IntervalHookCounter from "./component_useEffect/IntervalHookCounter";
import MouseContainer from "./component_useEffect/MouseContainer";
import DataFetching from "./data_fetching_useEffect/DataFetching";
import ComponentC from "./useContext_Hook/ComponentC";
import CounterOne from "./useReducer_hook/CounterOne";
import CounterTwo from "./useReducer_hook/CounterTwo";
import CounterThree from "./useReducer_hook/CounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterThree />
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}

      {/* <UserContext.Provider value={"Rohit"}>
        <ChannelContext.Provider value={"Kumar"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <DataFetching /> */}

      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}

      {/* <HooksCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
