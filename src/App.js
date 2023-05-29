import React from 'react';

//import './index.css'

import Adduser from './components/Users/Adduser';

import Card from './components/UI/Card';
import UsersList from './components/Users/UsersList';

function App() {


  return (
    <div>

      <Adduser />
      {/* <Card /> */}
      <UsersList users={[]} />
    </div>
  );
};

export default App;
