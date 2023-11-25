import React, { useState } from 'react'

function  State() {
  // let count = 0;
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Prabha");

  console.log(`Rendering ${count} times.`);
  return (
    <div>
      <button onClick={() => {
        // count++;
        
        setCount(count+1);

        setName("Raj" + " " + count);
        
        //console.log("Count Results: ", count);
        }}>Increment</button>

      <p>Count: {count}</p>  
     
      <p>Name: {name}</p>
    </div>
  )
}

export default  State  