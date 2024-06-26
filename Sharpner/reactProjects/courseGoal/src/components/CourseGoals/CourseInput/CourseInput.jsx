import { useState } from 'react';

import Button from '../../UI/Button/Button.jsx';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid': ''}`}>
        <label>Course Goal</label>
        <input 
          type="text" 
          value={enteredValue}
          onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" className={`button ${!isValid ? 'invalid': ''}`}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
