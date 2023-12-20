import { useState } from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css'
import UserList from './UserList';
import AddUser from './AddUser';

function App(props) {
  const [userList, setUserList] = useState([
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
  ]);

  const addUserHandler=(newUser)=>{
    newUser.id= userList.length>0 ? userList[userList.length-1].id+1 : 1;
    setUserList([...userList, newUser]);
  }

  const deleteUserHandler=(userId)=>{
    const newUsers=userList.filter(
      (user)=> user.id != userId
    );
    setUserList(newUsers);
  }

  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<UserList userList={userList} deleteUserHandler={deleteUserHandler} />} />
      <Route exact path='/add' element={<AddUser addUserHandler={addUserHandler} />} />
    </Routes>
   </Router>
  )
}

export default App
