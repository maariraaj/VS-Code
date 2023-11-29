import React from 'react'

function Users() {
  return (
    <div className="container mt-4">
        <h2>Users</h2>
        <table className="table table-hover">
            <thead className="table-dark">
                <tr>
                    <th>R.No.</th>
                    <th>Name</th>
                    <th>Sex</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Muthuprabha</td>
                    <td>Female</td>
                    <td>prabha@biyemr.com</td>
                </tr>
                <tr className='table-primary'>
                    <td>2</td>
                    <td>Mariraj</td>
                    <td>Male</td>
                    <td>raj@biyemr.com</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Users