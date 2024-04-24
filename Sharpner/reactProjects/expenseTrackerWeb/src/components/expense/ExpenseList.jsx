const ExpenseList = (props) => {
    
    return (
        <div key={props.id} className="card shadow-lg mt-3">
            <div className="card-body">
                <h5 className="card-title">Expense No :: {' '}{props.index + 1}</h5>
                <p><strong>Amount:</strong> ₹{props.expense.amount}</p>
                <p><strong>Description:</strong> {props.expense.description}</p>
                <p><strong>Category:</strong> {props.expense.category}</p>
            </div>
        </div>
    )
}

export default ExpenseList