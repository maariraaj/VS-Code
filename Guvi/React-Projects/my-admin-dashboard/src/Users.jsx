import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
    const [user, setUser]=useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res=>{
                setUser(res.data);
                //console.log("Use data:", res.data);
            });
    }, []);

  return (
    <div className="container mt-4">
        <h2>Users</h2>
        <table className="table table-hover">
            {/* <thead className="table-dark">
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
            </tbody> */}

            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>EMail</th>
                    <th>Website</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {user.map((item,index)=>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.website}</td>
                        <td>{`${item.address.suite} ${item.address.street} ${item.address.city}`}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Users