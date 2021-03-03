import React, { Component } from 'react';

import Aux from '../../../hoc/aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate () {
        console.log('order summary will update');
    }

    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        });

        return (
            <Aux>
                <h3>Order Summary</h3>
                <p>Your sandwich has the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
        <h3><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></h3>
        <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseCheckout}>CHECKOUT</Button>
            </Aux>
        );
    }
};

export default OrderSummary;