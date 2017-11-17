import React, { Component } from 'react';
import './App.css';

class Receipt extends Component {

    render() {
        return (
            <div>
                <h1>Receipt</h1>
                <table className="table">
                    <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>eggs</td>
                        <td>3</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>cookies</td>
                        <td>5</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>Subtotal</td>
                        <td>-</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td>-</td>
                        <td>-5</td>
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

export default Receipt;
