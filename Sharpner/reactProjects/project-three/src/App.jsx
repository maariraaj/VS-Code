import React, { useState } from 'react';
import AddUser from './components/Users/AddUser.jsx';
import UserList from'./components/Users/UserList.jsx'

const App=()=> {
  const [userList, setUserList]=useState([]);

  const addUserHandler=(username, age)=>{
    setUserList((prevUserList)=>{
      return [
        ...prevUserList,
        {name:username, age:age, id:Math.random().toString()}
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}  />
    </div>
  );
}

export default App;