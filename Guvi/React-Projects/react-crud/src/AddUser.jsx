import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function AddUser() {
  return (
    <div>
        <Header heading='Add new user' />
        <div className="container">
            <Link to='/'>
                <button type='button' className='btn btn-primary'>Back</button>
            </Link>

            <form onSubmit={onFormSubmitted} className="mt-3">
                <label htmlFor="name" className="form-label">
                    Name:{''}
                </label>
                <br />
                <input type="text" id='name' name='name' className="form-control" onChange={inputChangeHandler} />
                <br />
                <br />

                <label htmlFor="email" className="form-label">
                    Email:{''}
                </label>
                <br />
                <input type="text" id='email' name='email' className="form-control" onChange={inputChangeHandler} />
                <br />
                <br />
            </form>
        </div>
    </div>
  )
}

export default AddUser