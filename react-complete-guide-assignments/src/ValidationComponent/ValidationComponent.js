import React from 'react';
import './ValidationComponent.css';

const validation = (props) => {

    let textLength = null;
    let minLength = 5;

    textLength = props.length < minLength ? 'Text too short.' : 'Text too long.'

    return (
        <div className="Validation">
            <p>{textLength}</p>
        </div>
    )
}

export default validation;