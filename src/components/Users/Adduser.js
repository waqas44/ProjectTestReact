import React from "react";


const Adduser = (props) => {
    let Name1 = '';
    let Age1 = '';
    const userNameHandler = (event) => {
        console.log(event.target.value);

        Name1 = event.target.value;
    };
    const userAgeHandler = (event) => {
        console.log(event.target.value);

        Age1 = event.target.value;

    };

    const submitClickHandler = (event) => {
        event.preventDefault();
        console.log('User Name ' + Name1, 'Age' + Age1);


    };

    return (

        <div>

            <form onSubmit={submitClickHandler}>
                <label htmlFor='username'>User name </label>
                <input id='username' type="text" onChange={userNameHandler} />
                <label htmlFor='age'>Age </label>
                <input type="number" onChange={userAgeHandler} />

                <button type='submit'> Submit</button>
            </form>

        </div>



    )


};


export default Adduser;