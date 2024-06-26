import { useRef, useState } from 'react'
import classes from './AddUser.module.css';
import Card from '../UI/Card.jsx';
import Button from '../UI/Button.jsx';
import ErrorModal from '../UI/ErrorModal.jsx';
import Wrapper from '../Helpers/Wrapper.jsx';

const AddUser = (props) => {
  const collageInputRef=useRef();
  
  const [enteredUsername, setEnteredUsername]=useState('');
  const [enteredAge, setEnteredAge]= useState('');
  const [error, setError]= useState()

  const addUserHandler=(event)=>{
    event.preventDefault();

    const enteredCollegeName=collageInputRef.current.value;

    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age'
      })
      return;
    }

    if(+enteredAge<1){
      setError({
        title:'Invalid age',
        message:'Please enter a valid age (>0)'
      })
      return; 
    }

    props.onAddUser(enteredUsername, enteredCollegeName, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
    collageInputRef.current.value='';
  }

  const usernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value);
  }
  const userAgeChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }
  const errorHandler=()=>{
    setError(null);
  }

  return (
    <Wrapper>
      {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input 
            type='text' 
            id='username' 
            value={enteredUsername}
            onChange={usernameChangeHandler}
            />
          
          <label htmlFor='username'>College name</label>
          <input 
            type='text' 
            id='collegename' 
            ref={collageInputRef}/>

          <label htmlFor='age'>Age</label>
          <input 
            type='number' 
            id='age' 
            value={enteredAge}
            onChange={userAgeChangeHandler}
            />

          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser