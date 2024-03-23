import React from 'react';
import './ExpenseItem.css';

const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function ExpenseItem(props) {
    const month=props.date.getMonth();
    const year=props.date.getFullYear();
    let date=props.date.getDate();
    if(date<10){
        date='0'+date;
    }
    return (
    <div className="expense-item">
        <div>
            <div>{months[month]}</div>
            <div>{year}</div>
            <div>{date}</div>
        </div>
        <div className='expense-item__location'>{props.location}</div>
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        </div>
    </div>
    );
}
  
export default ExpenseItem;