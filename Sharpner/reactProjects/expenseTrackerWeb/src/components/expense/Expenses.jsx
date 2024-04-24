import React, { useState } from 'react';

const Expenses = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      amount: amount,
      description: description,
      category: category
    };
    setExpenses([...expenses, newExpense]);
    setAmount('');
    setDescription('');
    setCategory('');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Daily Expense Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Amount Spent</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <select
                className="form-select"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Petrol/Diesel">Petrol/Diesel</option>
                <option value="House rent">House Rent</option>
                <option value="EMI">EMI</option>
                <option value="Insurance">Insurance</option>
                <option value="Groceries">Groceries</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
      <h3 className='text-center mt-3'>Expense List:</h3>
      <div className="mt-4">
        {expenses.map((expense, index) => (
          <div key={index} className="card shadow-lg mt-3">
            <div className="card-body">
              <h5 className="card-title">Expense No :: {' '}{index + 1}</h5>
              <p><strong>Amount:</strong> ₹{expense.amount}</p>
              <p><strong>Description:</strong> {expense.description}</p>
              <p><strong>Category:</strong> {expense.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expenses;
