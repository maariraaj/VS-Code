import { useState } from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css'
import UserList from './UserList';
import AddUser from './AddUser';

function App() {
  const [userList, setCount] = useState([
    {
      id:1,
      name: 'Carol V',
      email: 'carol_v@hotmail.com' 
    },
    {
      id:2,
      name: 'John V',
      email: 'john_v@hotmail.com' 
    },
    {
      id:3,
      name: 'Kate V',
      email: 'kate_v@hotmail.com' 
    },
  ])

  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<UserList userList={userList} />} />
      <Route exact path='/add' element={<AddUser />} />
    </Routes>
   </Router>
  )
}

export default App
