import React, { Component } from 'react';
import './App.css';

class Receipt extends Component {
    constructor(props) {
        super(props);
        this.state = { subtotal: 0 };
    }

componentWillReceiveProps() {
    const total = this.props.cart.quantity * this.props.inventory[this.props.cart.product].price;
    this.setState({ subtotal: total });
    return false
}

render() {
        const sale = this.props.inventory[this.props.cart.product].sale && this.props.cart.quantity ?
            <p>Sale ${this.props.inventory[this.props.cart.product].sale}</p>
            : <p/>;
        const discount = this.props.inventory[this.props.cart.product].sale  && this.props.cart.quantity ?
            <p>-{(this.props.inventory[this.props.cart.product].price - this.props.inventory[this.props.cart.product].sale) * this.props.cart.quantity}</p>
            : '';
        return (
            <tr>
                <td>{this.props.cart.product}</td>
                <td>{this.props.cart.quantity} @ ${this.props.inventory[this.props.cart.product].price}
                    {sale}
                </td>
                <td>
                    {this.state.subtotal}
                    {discount}
                </td>
            </tr>
        );
    }
}
export default Receipt;
