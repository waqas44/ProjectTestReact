import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
  //we are forwarding the props.onconfirm by on click, onclick is avalaible by default for every html element

};

const ModelOverlay = (props) => {
  return (<Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>)

};

const ErrorModal = (props) => {


  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<ModelOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}



    </Fragment>
  );
};

export default ErrorModal;
