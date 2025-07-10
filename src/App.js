import {useState} from 'react';
import './App.css';
import Counter from "./Counter"
function App() {
  const [state,setState] = useState(false);
  return (
    <div className="App">
      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
     {state ? <Counter/> : null}
    </div>
  );
}

export default App;
