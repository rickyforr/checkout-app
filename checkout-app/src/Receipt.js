import React, { Component } from 'react';
import './App.css';

class Receipt extends Component {

    render() {
        const total = this.props.cart.quantity * this.props.inventory[this.props.cart.product].price
        return (
            <tr>
                <td>{this.props.cart.product}</td>
                <td>{this.props.cart.quantity} @ ${this.props.inventory[this.props.cart.product].price}</td>
                <td>{total}</td>
            </tr>
        );
    }
}

export default Receipt;
