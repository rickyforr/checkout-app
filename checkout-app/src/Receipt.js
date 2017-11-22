import React, { Component } from 'react';
import './App.css';

class Receipt extends Component {
    constructor(props) {
        super(props);
        this.state = { subtotal: 0 };
    }

    componentWillReceiveProps() {
        const total = this.props.cart.quantity * this.props.cart.price;
        this.setState({ subtotal: total });
        return false
    }

    saleType() {
        switch(this.props.cart.discount.type) {
            case 'SALE':
                if (this.props.cart.discount.price && this.props.cart.quantity) {
                return (<p className="promo">SALE ${this.props.cart.discount.price}</p>);
                }
                break;
            case '2FOR1':
                if (this.props.cart.quantity >= 2) {
                    return (
                        <p className="promo">
                            2FOR1 x {this.props.cart.quantity % 2 === 0 ?
                            this.props.cart.quantity / 2 :
                            (this.props.cart.quantity - 1) / 2}
                        </p>);
                }
                break;
            case 'BUY4':
                if (this.props.cart.quantity >= 4) {
                    return (
                        <p className="promo">
                            4 @ ${this.props.cart.discount.price} x {
                            this.props.cart.quantity % 4 === 0 ?
                            this.props.cart.quantity / 4 :
                            (this.props.cart.quantity - (this.props.cart.quantity % 4)) / 4}
                        </p>);
                }
                break;
        }
    }

    discountType() {
        switch(this.props.cart.discount.type) {
            case 'SALE':
                if (this.props.cart.discount.price && this.props.cart.quantity) {
                    return ( <p className="promo">-{(this.props.cart.price - this.props.cart.discount.price) * this.props.cart.quantity}</p>);
                }
                break;
                case '2FOR1':
                    const quantity = this.props.cart.quantity;
                    let remainder = quantity % 2;
                    let divided;
                    if (!remainder) {
                        divided = quantity / 2
                    } else {
                        divided = (quantity - 1) / 2;
                    }
                    if (divided) {
                        return (<p className="promo">-{this.props.cart.price * divided}</p>)
                    } else {
                        return (<p/>)
                    }
                    break;
                case 'BUY4':
                    remainder = this.props.cart.quantity % 4;
                    if (!remainder && this.props.cart.quantity >= 4) {
                        divided = this.props.cart.quantity / 4
                    } else  {
                        divided = (this.props.cart.quantity - remainder) / 4;
                    }
                    if (divided) {
                        return (<p className="promo">-{10* divided}</p>);
                    } else {
                        return (<p/>)
                    }
                    break;
        }
    }

    render() {
        return (
            <tr className="table-dark">
                <td>{this.props.cart.product}</td>
                <td >{this.props.cart.quantity} @ ${this.props.cart.price}
                    {this.saleType()}
                </td>
                <td>
                    {this.state.subtotal}
                    {this.discountType()}
                </td>
            </tr>
        );
    }
}
export default Receipt;
