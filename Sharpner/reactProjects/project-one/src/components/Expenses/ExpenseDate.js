import React from 'react'
import './ExpenseDate.css';

const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const ExpenseDate = (props)=> {
    const month=props.calenderDate.getMonth();
    const year=props.calenderDate.getFullYear();
    let date=props.calenderDate.getDate();
    if(date<10){
        date='0'+date;
    }
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{months[month]}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__date'>{date}</div>
    </div>
  );
}

export default ExpenseDate