import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <span>{count}</span>
    </div>
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
    </div>
  )
};

export default Counter;
