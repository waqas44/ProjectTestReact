import React, { useState } from 'react';

//import './index.css'

import Adduser from './components/Users/Adduser';

import Card from './components/UI/Card';
import UsersList from './components/Users/UsersList';

function App(props) {
  const [userlist, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((preUserstate) => {

      return [...preUserstate, { name: uName, age: uAge }]
    }


    );

  }
  return (
    <div>

      <Adduser onAddser={addUserHandler} />
      {/* <Card /> */}
      <UsersList users={[]} />
    </div>
  );
};

export default App;
