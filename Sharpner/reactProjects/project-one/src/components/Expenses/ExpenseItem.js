import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem=(props) => {
    const handleForDelete=() => {
        console.log("Clicked")
    };
    return (
    <Card className="expense-item">
        <ExpenseDate calenderDate={props.date}/>
        <div className='expense-item__location'>{props.location}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.price}</div>
            <button onClick={handleForDelete}>Delete Expense</button>
        </div>
    </Card>
    );
}
  
export default ExpenseItem;