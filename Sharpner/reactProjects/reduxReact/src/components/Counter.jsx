import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);

  const show = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    dispatch({ type: 'changeCount', amount: 1 })
  }
  const decrementHandler = () => {
    dispatch({ type: 'changeCount', amount: -1 })
  }
  const increaseHandler = () => {
    dispatch({ type: 'changeCount', amount: 5 })
  }
  const decrementby5Handler = () => {
    dispatch({ type: 'changeCount', amount: -5 })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementby5Handler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
