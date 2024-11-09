import React, { useReducer } from 'react'
let initialVal = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 }
    }
    case 'decrement': {
      return { count: state.count - 1 }
    }
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialVal);
  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }
  const decrementHandler = () => {
    if (state.count > 0) {
      dispatch({ type: 'decrement' })
    }
  }
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={incrementHandler} >Increment</button>
      <button onClick={decrementHandler} >decrement</button>
    </div>
  )
}

export default App