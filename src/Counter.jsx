import React from 'react'
import { useState,useEffect } from 'react'

function Counter() {
     const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Component mounted....");
        console.log("Count has changed to..... "+count);
       
    },[count]);
   
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>I am Component {count} </h1>
    </div>
  )
}

export default Counter
