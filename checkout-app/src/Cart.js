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
        this.handleQuantity = this.handleQuantity.bind(this);
    }
    shouldComponentUpdate(nextState, nextProps) {
        console.log('CART should update', nextProps, nextState);
        return true
    }

    handleAddProduct = function (e) {
       e.preventDefault();
       console.log('The button was clicked, adding to cart', this.state.quantity);
       const num = this.state.quantity;
       this.props.handleUpdateProduct(this.props.cart.id, num, this.props.cart.product);
    };

    handleRemoveProduct = function (e) {
       e.preventDefault();
       console.log('The button was clicked, removing from cart', this.state.quantity);
       const num = -1 * this.state.quantity;
       this.props.handleUpdateProduct(this.props.cart.id, num, this.props.cart.product);
    };


    handleQuantity = function (e) {
        this.setState({quantity: e.target.value});
        console.log('from handleQuantity', this.state)
    };

    render() {
        console.log('quantity vs inventory ', Number(this.state.quantity) + ' ' + Number(this.props.cart.quantity) + ' ' + Number(this.state.inventory));
        const message =  this.state.quantity > this.props.inventory[this.props.cart.product].quantity ?
            <p className="alert-message">That amount exceeds our {this.props.cart.product} inventory</p> : <p className="alert-message"/>;
        const addButton =  Number(this.state.quantity) + Number(this.props.cart.quantity) > this.state.inventory ||  Number(this.state.quantity) < 0 ?
            'disable' : '';
        const removeButton = Number(this.state.quantity) > Number(this.props.cart.quantity) ||  Number(this.state.quantity) < 0 ?
           'disable'  : '';

        return (
            <div className="row justify-content-center">
                <div className="col-3 image">
                     <img src={this.props.cart.image} style={{width:80}}/>
                     <span className="inventory"><p>{this.props.inventory[this.props.cart.product].quantity}</p></span>
                </div>
                <div className="col-1 label">
                    <label className="cart">{this.props.cart.product}</label>
                </div>
                <div className="col-5 cart-controls">
                    {message}
                    <button className="btn btn-primary cart" onClick={(e) => this.handleRemoveProduct(e) } disabled={removeButton}>
                        <i className="fa fa-minus" aria-hidden="true"/>
                    </button>
                    <input type="number" max={this.state.inventory} min={0} onInput = {this.handleQuantity} placeholder='#' value={this.state.quantity}/>
                    <button className="btn btn-primary cart" onClick={(e) => this.handleAddProduct(e) } disabled={addButton}>
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Cart;