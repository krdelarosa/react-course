import React, { Component } from 'react';

import Aux from '../aux/Aux';
import classes from './Layout.css';
import SideDrawer from '../../components/navigation/sideDrawer/SideDrawer';
import Toolbar from '../../components/navigation/toolbar/Toolbar';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render (){
        return (
            <Aux>
                <Toolbar opened={this.sideDrawerOpenHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
} 

export default Layout;