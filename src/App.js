import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import NewUserForm from './components/NewUserForm';


function App() {

const [userList, setUserList] = useState([
  { name: 'Stathis Vranakis', age: 31 },
  { name: 'Myrto Skyrianni', age: 29 }
])

const addUserHandler = user => {
  setUserList((prevUsers) => {
    return [...prevUsers, user];
  });
  console.log(user);
}  

  return (
    <div className="App">
      <NewUserForm addUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
