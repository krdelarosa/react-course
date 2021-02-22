import React from 'react';

import Logo from '../../logo/Logo';
import classes from './Toolbar.css';

import NavigationItems from '../navigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/DrawerToggle';

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.opened} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;