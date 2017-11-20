import React, { Component } from 'react';
import './App.css';

class Total extends Component {

    render() {
        return (
            <div>
                <table className="table">
                <tbody>
                <tr>
                    <td>Subtotal</td>
                    <td>-</td>
                    <td>${this.props.subtotal}</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>-</td>
                    <td>-${this.props.discount}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>${this.props.subtotal - this.props.discount}</td>
                </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default Total;


