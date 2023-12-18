import React from 'react'
import Header from './Header';
import {Link} from 'react-router-dom';

function UserList({userList}) {
  return (
    <div>
        <Header heading='User List'/>
        <div className="container">
            <div className="card bg-success text-white text-center">
                <div className="card-body">
                    <div className="card-header">
                        <h2>User Listing</h2>
                    </div>
                    <div className="card-text">
                        <table className="table table-bodered">
                            <thead className="table-warning text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.map(item=>(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button type='button' className='btn btn-warning'>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-text">
                        <Link to='./add'>
                            <button type='button' className='btn btn-danger'>Add</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserList