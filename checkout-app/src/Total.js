import React, { Component } from 'react';
import './App.css';
import { getSubtotal }from './state-functions'


class Total extends Component {

    constructor(props) {
        super(props);
        this.state = { subtotal: 0 };
    }

    componentWillReceiveProps(nextProps) {
        const sum = getSubtotal(this.props.cart, this.props.inventory);
        console.log('TOTAL', nextProps);
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
                    <td>{this.props.total}</td>
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


