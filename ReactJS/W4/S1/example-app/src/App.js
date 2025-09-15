import './App.css';
import { useReducer } from 'react';


function reducer(count, action){
  switch (action.type){
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return 0; 
    case "change":
      return action.input; 
    default: 
      throw new Error();
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  function handleIncrement(){
    dispatch({type: "increment"});
  }
  function handleDecrement(){
    dispatch({type: "decrement"});
  }
  function handleReset(){
    dispatch({type: "reset"});
  }
  return (
    <div>
      <h1>{count}</h1>
      <input type="number" value={count} onChange={(e)=>dispatch({type: "change", input: Number(e.target.value)})}/>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>

    </div>
  );
}

export default App;
