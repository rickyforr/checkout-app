import React, { Component } from 'react';
import './App.css';

class Receipt extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.cart.product}</td>
                <td>{this.props.cart.quantity}</td>
                <td>50</td>
            </tr>
        );
    }
}

export default Receipt;
