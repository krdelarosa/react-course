import React, { Component } from 'react';

import axios from '../../axios-order';
import Aux from '../../hoc/aux/Aux';
import errorHandler from '../../hoc/errorHandler/ErrorHandler';

import Sandwich from '../../components/sandwich/Sandwich';
import BuildControls from '../../components/sandwich/buildControls/BuildControls';
import { object } from 'prop-types';

import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/sandwich/orderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.4,
    bacon: 0.6,
    cheese: 0.5,
    meat: 0.7 
}

class SandwichBuilder extends Component
{
    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        axios.get('https://react-sandwich-builder-cb958-default-rtdb.firebaseio.com/ingredients.json')
        .then(response => {
            console.log(response);
            this.setState({ingredients: response.data})
        })
        .catch(error => {
            this.setState({error: true})
        });
    }

    addIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];
        const newCount = prevCount + 1;

        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = newCount;

        const ingredientPrice = INGREDIENT_PRICES[type];
        const prevTotal = this.state.totalPrice;
        const newTotal = prevTotal + ingredientPrice;

        this.setState({
            totalPrice: newTotal, 
            ingredients: updatedIngredient
        })
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];

        if(prevCount <= 0){
            return;
        }

        const newCount = prevCount - 1;

        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = newCount;

        const ingredientPrice = INGREDIENT_PRICES[type];
        const prevTotal = this.state.totalPrice;
        const newTotal = prevTotal - ingredientPrice;

        this.setState({
            totalPrice: newTotal, 
            ingredients: updatedIngredient
        })
        this.updatePurchaseState(updatedIngredient);
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum,el) => {
            return sum + el;
        }, 0);

        this.setState({purchaseable: sum > 0});
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseCheckoutHandler = () => {
        // alert('CHECKOUT ORDER!');
        this.setState({loading:true});
        
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name: 'Karen de la Rosa',
                address: {
                    street: 'Test Street',
                    zip_code: '1234',
                    country: 'Test Country'
                },
                email: 'test@test.com'
            },
            delivery_method: 'fastest'
        }
        axios.post('/orders.json',order)
        .then(response => {
            this.setState({loading: false});
            this.setState({purchasing: false});
        })
        .catch(error => {
            this.setState({loading: false});
            this.setState({purchasing: false});
        });
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0 
        }

        let orderSummary = null;
        let sandwich = this.state.error ? <p>Oops! Something is wrong!</p> : <Spinner />

        if(this.state.ingredients != null){
            sandwich = (
                <Aux>
                    <Sandwich ingredients={this.state.ingredients}/>
                    <BuildControls
                        totalPrice={this.state.totalPrice}
                        disabled={disabledInfo}
                        purchaseable={this.state.purchaseable}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );

            orderSummary = <OrderSummary 
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseCheckout={this.purchaseCheckoutHandler}
                />;
        }

        if(this.state.loading){
            orderSummary = <Spinner />;
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {sandwich}
            </Aux>
        );
    };
}

export default errorHandler(SandwichBuilder, axios);