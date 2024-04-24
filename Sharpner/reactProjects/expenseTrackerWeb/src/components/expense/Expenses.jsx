import React, { useState, useEffect, useRef } from 'react';
import ExpenseList from './ExpenseList';

const Expenses = () => {
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);

  const [expenses, setExpenses] = useState([]);

  const firebaseAPI = 'https://react-http-bb1f2-default-rtdb.firebaseio.com/';

  const firebaseEndpoint = `expenses.json`;

  const fetchData = () => {
    fetch(`${firebaseAPI}${firebaseEndpoint}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(responseData => {
        if (responseData) {
          setExpenses(Object.values(responseData));
        } else {
          setExpenses([]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: `${amountRef.current.value}_${categoryRef.current.value}_${Math.random().toString()}`,
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value
    };
    fetch(`${firebaseAPI}${firebaseEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newExpense)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to post data to Firebase');
        }
        return response.json();
      })
      .then(data => {
        console.log("POST", data);
        fetchData();
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });

    amountRef.current.value = '';
    descriptionRef.current.value = '';
    categoryRef.current.value = '';
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                ref={amountRef}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                ref={descriptionRef}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <select
                className="form-select"
                id="category"
                ref={categoryRef}
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
        {expenses && expenses.map((expense, index) => (
          <ExpenseList
            key={expense.id}
            id={expense.id}
            index={index}
            expense={expense}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;