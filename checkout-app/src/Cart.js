import React, { Component } from 'react';
import './App.css';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { quantity: this.props.cart.quantity };
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleQuantity= this.handleQuantity.bind(this);
    }

   handleAddProduct = function (e) {
       e.preventDefault();
       console.log('The button was clicked.', this.state.quantity);
       const num = this.state.quantity;
       this.props.handleAddProduct(this.props.cart.id, num);
    };

    handleQuantity = function (e) {
        console.log(e.target.max);
        if (e.target.value < e.target.max)
        {
            this.setState({quantity: e.target.value});
            console.log('from handleQuantity', this.state)
        }
        else {
            const message = (<p>Too High</p>);
            console.log(message)
        }
    };

    render() {
        return (
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <label>{this.props.cart.product}</label>
                            <input type="number" max='10' onInput = {this.handleQuantity } placeholder='# to add to cart'/>
                            <button onClick={(e) => this.handleAddProduct(e) }>add</button>
                            <button>remove</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Cart;