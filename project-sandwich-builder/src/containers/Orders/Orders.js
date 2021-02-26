import React, { Component } from 'react';

import Axios from '../../axios-order';
import ErrorHandler from '../../hoc/errorHandler/ErrorHandler';

import Order from '../../components/order/Order';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    
    componentDidMount () {
        Axios.get('/orders.json')
            .then(res => {
                console.log(res.data);
                const fetchOrders = [];
                for(let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchOrders});
                console.log(this.state);
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render () {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id} 
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))}
            </div>
        );
    }
}

export default ErrorHandler(Orders, Axios);