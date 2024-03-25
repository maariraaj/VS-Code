import React, {useState} from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses=(props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.expenses.map((expense)=>{
          return(
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              price={expense.price}
              location={expense.location}
            />
          );
      })}
    </Card>
  )
}

export default Expenses