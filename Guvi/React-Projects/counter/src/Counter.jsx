import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

  return (
    <div>
        <button onClick={() => setBool(!bool)}>Re-Render</button>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <p>Count: {count}</p>
    </div>
  )
}

export default Counter