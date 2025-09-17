import React, { useState } from 'react'

const OddEven = () => {
    const[count,setCount]=useState(0);
    const IsOddeven=()=>{
        return(count%2===0)
    }

  return (
    <div>
      <h1>EvenOdd</h1>
      {count}<span>{IsOddeven()?"even":"odd"}</span><br />
      <button onClick={()=>setCount(count+1)}>increase</button>
      <button onClick={()=>setCount(count-1)}>decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default OddEven;
