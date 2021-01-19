import React from 'react';
import './CharComponent.css';

const character = (props) => {

    return (
        <div className="Character">
            <p 
            onClick={props.click}
            >{props.character}</p>
        </div>
    )
}

export default character;