import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const userInputStyle = {
        font: 'inherit',
        border: '2px solid blue',
        padding: '8px',
        marginBottom:'5px'
      };
      
    return (
        <div className="userInput">
            <input 
            type="text" 
            style={userInputStyle}
            onChange={props.changed}
            value={props.uname}
            />
        </div>
    )
}

export default userInput;
