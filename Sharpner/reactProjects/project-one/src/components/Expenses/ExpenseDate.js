import React from 'react'
import './ExpenseDate.css';

const ExpenseDate = (props)=> {
    const month=props.calenderDate.toLocaleString('en-US', {month: 'long'});
    const year=props.calenderDate.getFullYear();
    let date=props.calenderDate.toLocaleString('en-US', {day: '2-digit'});

  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__date'>{date}</div>
    </div>
  );
}

export default ExpenseDate