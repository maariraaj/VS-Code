import './ExpensesList.css';
import ExpenseItem from './ExpenseItem.jsx';

const ExpensesList = (props) => {

    if(props.expenses.length===0){
        return <h2 className='expenses-list__fallback'>No expenses found.</h2>
    }
    if(props.expenses.length===1){
        return (
            <div>
                <ul className='expenses-list'>
                    {props.expenses.map((expense)=>(
                        <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        price={expense.price}
                        location={expense.location}
                        />)
                    )}
                </ul>
                <p className='expenses-list__fallback'>Only single Expense here. Please add more...</p>
            </div>
        )
    }
    return (
        <ul className='expenses-list'>
            {props.expenses.map((expense)=>(
                <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                price={expense.price}
                location={expense.location}
                />)
            )}
        </ul>
    )
}

export default ExpensesList