import React, { Component } from 'react';
import './App.css';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.cart.quantity,
            inventory: this.props.inventory[this.props.cart.product].quantity,
        };
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleQuantity= this.handleQuantity.bind(this);
    }
    shouldComponentUpdate(nextState, nextProps) {
        console.log('CART should update', nextProps, nextState);
        return true
    }

    handleAddProduct = function (e) {
       e.preventDefault();
       console.log('The button was clicked, adding to cart', this.state.quantity);
       const num = this.state.quantity;
       this.props.handleAddProduct(this.props.cart.id, num, this.props.cart.product);
    };

    handleQuantity = function (e) {
        this.setState({quantity: e.target.value});
        console.log('from handleQuantity', this.state)
    };

    render() {
        console.log('quantity vs inventory number:' + Number(this.state.quantity) + Number(this.props.cart.quantity));
        const message =  this.state.quantity > this.state.inventory ? <p>Too many {this.props.cart.product}</p> : <p></p>;
        const add_button =  Number(this.state.quantity) + Number(this.props.cart.quantity) > this.state.inventory ? 'disable' : '';

        return (
            <div className="row">
                <div className="col">
                    <ul >
                        <li className="list-group-item">
                            <img src={this.props.cart.image} style={{width:80}}/>
                            <label className="cart">{this.props.cart.product}</label>
                            <button className="btn btn-danger cart">
                                <i className="fa fa-minus" aria-hidden="true"/>
                            </button>
                            <input type="number" max={this.state.inventory} onInput = {this.handleQuantity } placeholder='# to add to cart' />
                            <button className="btn btn-success cart" onClick={(e) => this.handleAddProduct(e) } disabled={add_button}>
                                <i className="fa fa-plus" aria-hidden="true"/>
                            </button>
                            <span > {message} </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Cart;