import React, { Component } from 'react';
import './App.css';

class Total extends Component {

    constructor(props) {
        super(props);
        this.state = {subtotal: 0};
    }

    componentWillReceiveProps(nextProps) {
        const quantity = [];
        this.props.cart.forEach(function(element) {
            quantity.push(element.quantity);
        });
        const prices = [];
        const inventory = this.props.inventory
        for (let product in inventory) {
            prices.push(inventory[product].price)
        }
        let sum = 0;
        for(let i=0; i< quantity.length; i++) {
            sum += quantity[i]*prices[i];
        }
        console.log('TOTAL', sum);
        this.setState({subtotal: sum})
    }


    render() {
        return (
            <div>
                <table className="table">
                <tbody>
                <tr>
                    <td>Subtotal</td>
                    <td>-</td>
                    <td>{this.state.subtotal}</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>-</td>
                    <td>-0</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>44</td>
                </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default Total;


