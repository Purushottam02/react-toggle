import "./App.scss";
import ToggleButton from "./component/ToggleButton";
function App() {
  
  return (
   <ToggleButton onToggleStateChange={(state)=>{
    console.log(state);
   }}/>
  );
}

export default App;
