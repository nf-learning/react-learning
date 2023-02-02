import React, {useState} from 'react';
import './App.css';

function App() {
  //Must use hooks in a functional component
  //Must be in the same order every time - Not conditional


  const [count, setCount] = useState(4);
  const decrementCount = ()=>{
    setCount(prevCount => prevCount -1);
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
