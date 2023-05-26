import React, { useState } from "react";
import Card from "../UI/Card";

import classes from './Adduser.module.css';
import Button from "../UI/Button";





const Adduser = (props) => {
    // let Name1 = '';
    // let Age1 = '';
    const [enteredUserName, setEnteredUserName] = useState('');

    const [enterdAge, setEnteredAge] = useState('');
    const userNameHandler = (event) => {
        // console.log(event.target.value);
        // useState(uNameUpdated);
        setEnteredUserName(event.target.value);
        // Name1 = event.target.value;
    };
    const userAgeHandler = (event) => {
        // console.log(event.target.value);
        // useState(uAgeUpdated);
        setEnteredAge(event.target.value);
        // Age1 = event.target.value;

    };

    const submitClickHandler = (event) => {
        event.preventDefault();
        // console.log('User Name ' + Name1, 'Age' + Age1);
        console.log(enteredUserName, enterdAge);

    };

    return (

        <Card className={classes.input}>

            <form onSubmit={submitClickHandler}>
                <label htmlFor='username'>User name </label>
                <input id='username' type="text" onChange={userNameHandler} />
                <label htmlFor='age'>Age </label>
                <input type="number" onChange={userAgeHandler} />

                <Button type="submit"> Add user</Button>
            </form>

        </Card>



    );


};


export default Adduser;