import React, { Fragment, useState } from 'react';
import AddUser from './components/Users/AddUser.jsx';
import UserList from'./components/Users/UserList.jsx'

const App=()=> {
  const [userList, setUserList]=useState([]);

  const addUserHandler=(username, college, age)=>{
    setUserList((prevUserList)=>{
      return [
        ...prevUserList,
        {name:username, college:college, age:age, id:Math.random().toString()}
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}  />
    </Fragment>
  );
}

export default App;