import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);

  const show = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.changeCount(1));
  }
  const decrementHandler = () => {
    dispatch(counterActions.changeCount(-1));
  }
  const incrementby5Handler = () => {
    dispatch(counterActions.changeCount(5));
  }
  const decrementby5Handler = () => {
    dispatch(counterActions.changeCount(-5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
        <button onClick={incrementby5Handler}>Increment by 5</button>
        <button onClick={decrementby5Handler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
