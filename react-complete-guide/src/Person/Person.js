import React from 'react';
// import styled from 'styled-components'; // third party library
// import Radium from 'radium';// import in file that uses it
import classes from './Person.css';

const person = (props) => {
    const rmd = Math.random();

    if(rmd > 0.7){
        throw new Error('Oops! Something is wrong.');
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;
