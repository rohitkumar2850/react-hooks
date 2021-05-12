import './App.css';
import ClassCounter from './componenets/ClassCounter';
import HookCounter from './componenets/HookCounter';
import HookCounterThree from './componenets/HookCounterThree';
import HookCounterTwo from './componenets/HookCounterTwo';
import HooksCounterFour from './componenets/HooksCounterFour';
import HookCounterOne from './component_useEffect/HookCounterOne';
import HookMouse from './component_useEffect/HookMouse';
import IntervalHookCounter from './component_useEffect/IntervalHookCounter';
import MouseContainer from './component_useEffect/MouseContainer';
import DataFetching from './data_fetching_useEffect/DataFetching';

function App() {
  return (
    <div className="App">
     <DataFetching />

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
