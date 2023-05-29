import React from "react";

import Card from "../UI/Card";
// import classes from UsersList;
import classes from './UsersList.module.css';
const UsersList = (props) => {

    return (
        <Card className={classes.users}>
            <ul> {props.users.map(user => ( // props.users holds array of objects

                <li key={user.id}> {user.name}  {user.age} Years Old </li>
                // reason of expecting array of of objects here is because we are managing the data, it is our designed app.
            ))



            }</ul ></Card>

    );
};

export default UsersList;