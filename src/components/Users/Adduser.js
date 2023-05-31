import React, { useState } from "react";
import Card from "../UI/Card";

import classes from './Adduser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";




const Adduser = (props) => {
    // let Name1 = '';
    // let Age1 = '';
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enterdAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');


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
        if (enteredUserName.trim().length === 0 || enterdAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid Name and Age'

            });
            return;

        }
        if (+enterdAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid Age'

            });
            return;

        }
        props.onAddUser(enteredUserName, enterdAge);
        console.log(enteredUserName, enterdAge);
        setEnteredUserName('');
        setEnteredAge('');
    };
    const errorHandler = () => {
        setError(null);

    };
    return (
        [
            error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />,

            <Card className={classes.input}>

                <form onSubmit={submitClickHandler}>
                    <label htmlFor='username'>User name </label>
                    <input id='username' type="text" value={enteredUserName} onChange={userNameHandler} />
                    <label htmlFor='age'>Age </label>
                    <input type="number" value={enterdAge} onChange={userAgeHandler} />
                    <Button type="submit"> Add user</Button>
                </form>

            </Card>

        ]

    );


};


export default Adduser;