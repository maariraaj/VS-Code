import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

    useEffect(()=>{
      console.log("Every Mount and Updated!!");
    });

    useEffect(()=>{
      console.log("Every Mount because it has empty dependancy array!!");
    }), []; 

    useEffect(()=>{
      console.log("Every Mount and bool dependancy array!!");

      return ()=> console.log("Unmount!!!");
    }, [bool]);
    

  return (
    <div>
        <button onClick={() => setBool(!bool)}>Re-Render</button>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <p>Count: {count}</p>
    </div>
  )
}

export default Counter