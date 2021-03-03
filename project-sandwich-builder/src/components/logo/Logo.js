import React from 'react';

import classes from './Logo.css';
import burgerLogo from '../../assets/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MySandwich" />
    </div>
);

export default logo;