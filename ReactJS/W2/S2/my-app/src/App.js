import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Arr, SetArr] = useState(["CDTH23A","CDTH23B","CDTH23C","CDTH23D","CDTH23E","CDTH23F","CDTH23H"])
  return (
    <>
      <h1>Danh sach cac lop:</h1>
      <ul>
        {
          Arr.map(x=>{
            <li key={x}>
              <p>{x}</p>
              <button>Sua</button>
              <button>Xoa</button>
            </li>
          })
        }
      </ul>
      <input type='text'/>
      <button>Them</button>
    </>
  );
}

export default App;
