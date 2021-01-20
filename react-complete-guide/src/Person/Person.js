import React from 'react';
import styled from 'styled-components';
// import Radium from 'radium';// import in file that uses it
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

// export default Radium(person);
export default person;
