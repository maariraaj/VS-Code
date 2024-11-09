import React, { useEffect, useReducer, useState } from 'react'

const initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
    }
}
const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [count, setCount] = useState(5);
    const incrementHandler = () => {
        // dispatch({ type: 'increment' })
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        alert(`Count ${count}`)
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        console.log('Count', count);
    }
    const decrementHandler = () => {
        // if (state.count > 0) {
        //     dispatch({ type: 'decrement' })
        // }
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    }
    console.log("Outside", count)
    useEffect(() => {
        console.log("Updated count:", count);
    }, [count]);

    return (
        <div>
            {/* <div>count: {state.count}</div> */}
            <div>count: {count}</div>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={decrementHandler}>decrement</button>
        </div>
    )
}

export default App