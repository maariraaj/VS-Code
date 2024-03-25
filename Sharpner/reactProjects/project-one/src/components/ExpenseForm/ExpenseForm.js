import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');
    const [enteredLocation, setEnteredLocation]=useState('');

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate),
            location: enteredLocation
        }
        props.onAddExpense(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredLocation('');
    };
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };                                                                                                                                                                  
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };
    const locationChangeHandler=(event)=>{
        setEnteredLocation(event.target.value);
    };

  return (
    <form className='new-expense' onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                    type='text' 
                    onChange={titleChangeHandler} 
                    value={enteredTitle} />
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                    type='number' 
                    onChange={amountChangeHandler} 
                    value={enteredAmount} />
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                    type='date' 
                    min='2021-01-01'
                    max='2024-12-31'
                    onChange={dateChangeHandler} 
                    value={enteredDate} />
            </div>

            <div className='new-expense__control'>
                <label>Location</label>
                <input 
                    type='text' 
                    onChange={locationChangeHandler} 
                    value={enteredLocation} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm