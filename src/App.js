import "./App.scss";
import { useState } from "react";
function App() {
  const [on, setOn] = useState(false);
  return (
    <div className={on ? "switch on" : "switch"}onClick={()=>{
      setOn(!on);
    }}>
      <div className={on ? "circle on" : "circle"} ></div>
    </div>
  );
}

export default App;
