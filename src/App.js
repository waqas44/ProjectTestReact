import React, { useState } from 'react';

//import './index.css'

//import Adduser from './components/Users/Adduser';
import AdduserRefs from './components/Users/AddUserRefs';

import Card from './components/UI/Card';
import UsersList from './components/Users/UsersList';

function App(props) {
  const [userlist, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => { // This addUserHandler holds all the arrays of previous users and newly added users data
    setUserList((preUserstate) => {

      return [...preUserstate, { name: uName, age: uAge, id: Math.random().toString() }];
    }


    );

  }
  return (
    <>

      <AdduserRefs onAddUser={addUserHandler} />

      <UsersList users={userlist} />
    </>
  );
};

export default App;
