import React from 'react';

import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.inputElement];

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p className={classes.ValidationError}>Please enter a valid {props.elementtype}!</p>;
    }

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    console.log(props);
    switch (props.elementtype) {
        case ('input'):
            inputElement = <input 
                            className={inputClasses.join(' ')} 
                            {...props.elementconfig} 
                            value={props.value}
                            onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                            {...props.elementconfig}
                            value={props.value}
                            onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')} 
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementconfig.options.map(option => (
                        <option key={option.id} value={option.id}>{option.text}</option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input 
                        className={inputClasses.join(' ')} 
                        {...props.elementconfig}
                        value={props.value}
                        onChange={props.changed} />;
    };

    
    
    return (
        <div className={classes.inputElement}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default input;