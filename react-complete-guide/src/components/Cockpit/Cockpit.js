import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null); // import and use useRef() for fuctional code
    const authContext = useContext(AuthContext); // useContext() is for functional, contextType is for class-based

    console.log(authContext.authenticated);

    useEffect(() => { // runs after rendering components
        console.log('Cockpit useEffect()');
        // Http request
        // setTimeout(() => {
        //     alert('saved data to cloud');
        // }, 1000);
        
        toggleButtonRef.current.click();

        return () => {
            console.log('cockpit.js cleanup with useeffect')
        };
    },[]); // for when the component is destroyed; can specify elements to watch and be triggered everytime those are updated

    useEffect(() => {
        console.log('Cockpit 2nd useEffect()');
        return () => {
            console.log('cockpit.js cleanup with 2nd useeffect')
        };
    }); // for everytime there is an update
    
    let btnClasses = "";
    const assignedClasses = [];
    
    if(props.showPersons){
        btnClasses = classes.Red;
    }
    
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p 
            className={assignedClasses.join(' ')}>
                EUREKA! It's working!
            </p>
            <button 
                className={btnClasses} 
                onClick={props.clicked}
                ref={toggleButtonRef}
            >
                Toggle Persons List
            </button>
            {/* <AuthContext.Consumer> */}
                {/* {(context) => <button onClick={context.login}>Log In</button>} */}
            {/* </AuthContext.Consumer> */}
            {<button onClick={authContext.login}>Log In</button>}
        </div>
    );
};

export default React.memo(cockpit); // React memo-ize your component