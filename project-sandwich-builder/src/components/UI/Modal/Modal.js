import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/aux/Aux';

import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('will update');
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'transformY(0)' : 'transformY(-1000vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    };
};

export default Modal;