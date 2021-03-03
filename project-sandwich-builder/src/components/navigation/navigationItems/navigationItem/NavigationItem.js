import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';
import { checkPropTypes } from 'prop-types';

const navigationItem = (props) => (
        <li className={classes.NavigationItem}>
            <NavLink 
                to={props.link}
                activeClassName={classes.active}>{props.children}</NavLink>
        </li>
);

export default navigationItem;