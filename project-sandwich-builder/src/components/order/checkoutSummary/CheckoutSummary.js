import React from 'react';

import Button from '../../UI/Button/Button';

import Sandwich from '../../sandwich/Sandwich';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Enjoy your order!</h1>
            <div style={{ width: '100%', margin:'auto'}}>
                <Sandwich ingredients={props.ingredients} />
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}
            >CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}
            >COMPLETE</Button>
        </div>
    );
}

export default checkoutSummary;