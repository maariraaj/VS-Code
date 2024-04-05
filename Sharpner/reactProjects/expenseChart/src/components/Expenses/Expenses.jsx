import {useState} from 'react'
import './Expenses.css';
import Card from '../UI/Card.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import ExpensesList from './ExpensesList.jsx';
import ExpensesChart from './ExpensesChart.jsx';

const Expenses=(props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  )
}

export default Expenses