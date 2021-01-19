import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>I am a paragraph in a userOutput container created by {props.uname}.</p>
            <p>I am another paragraph in the same userOutput container.</p>
        </div>
    )
}

export default userOutput;
