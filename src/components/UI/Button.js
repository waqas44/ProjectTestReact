import React from "react";


import classes from './Button.module.css';

const Button = (props) => {



    return (
        <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>{props.children} </button>
        //We are forwarding that onclick on our custom component so when we click on on button it forward that onClick event, without forward onClick event button will not work

    );
};



export default Button;


