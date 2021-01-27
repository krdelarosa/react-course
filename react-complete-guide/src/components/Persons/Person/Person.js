import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component{

    constructor(props){
        super();
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; // alternative to AuthContext, but only for class-based code

    componentDidMount(){ // only for class-based JS
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
    // const person = (props) => { // stateless component; functional component that does not manage state
        console.log('Person rendering');
        return (
            <Aux key="aux1">
                {/* <AuthContext.Consumer> */}
                    {/* { (context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>} */}
                {/* </AuthContext.Consumer> */}
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
                <p onClick={this.props.click}>
                    My name is {this.props.name} and I'm {this.props.age} years old!</p>
                <p key="p2" >{this.props.children}</p>
                <input 
                    key="i3" 
                    type="text" 
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

// setting expected data types for passed props
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,classes.Person);
