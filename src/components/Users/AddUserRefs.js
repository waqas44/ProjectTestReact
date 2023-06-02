import React, { useState, useRef } from "react";
import Card from "../UI/Card";

import classes from './Adduser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import Wrapper from "../Helpers/Wrapper";


const AdduserRefs = (props) => {
    // let Name1 = '';
    // let Age1 = '';

    const [error, setError] = useState('');
    const inputName = useRef();
    const inputAge = useRef();



    const submitClickHandler = (event) => {
        event.preventDefault();
        // console.log('User Name ' + Name1, 'Age' + Age1);
        const inputNameEnterd = inputName.current.value;
        const inputAgeEnterd = inputAge.current.value;


        if (inputNameEnterd.trim().length === 0 || inputAgeEnterd.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid Name and Age'

            });
            return;

        }
        if (+inputAgeEnterd < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid Age'

            });
            return;

        }
        props.onAddUser(inputNameEnterd, inputAgeEnterd);
        //console.log(enteredUserName, enterdAge);
        console.log(inputName, inputAge);
        console.log(inputName.current.value, inputAge.current.value);


        inputName.current.value = "";
        inputAge.current.value = "";
    };
    const errorHandler = () => {
        setError(null);

    };
    return (
        <Wrapper>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}

            <Card className={classes.input}>

                <form onSubmit={submitClickHandler}>
                    <label htmlFor='username'>User name </label>
                    <input id='username' type="text"
                        ref={inputName}
                    />
                    <label htmlFor='age'>Age </label>
                    <input type="number"
                        ref={inputAge}
                    />
                    <Button type="submit"> Add user</Button>
                </form>

            </Card>

        </Wrapper>

    );


};


export default AdduserRefs;