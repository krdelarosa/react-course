import React, { Component } from 'react';

import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log('contact-data');
        console.log(this.props.ingredients);

        this.setState({loading:true});
        
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
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
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({loading: false});
        });
    }

    render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name"></input>
                <input className={classes.Input} type="email" name="email" placeholder="Your Email"></input>
                <input className={classes.Input} type="text" name="street" placeholder="Your Street Name"></input>
                <input className={classes.Input} type="text" name="code" placeholder="Your Postal Code"></input>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter contact data!</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;