import React, { Component } from 'react';
import './App.css';
import AlertContainer from 'react-alert'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.cart.quantity,
            inventory: this.props.cart.inventory,
        };
    }

    handleAddProduct =  (e) => {
       e.preventDefault();
       const num = this.state.quantity;
       this.props.handleUpdateProduct(this.props.cart.id, num, this.props.cart.product);
    };

    handleRemoveProduct = (e) => {
       e.preventDefault();
       const num = -1 * this.state.quantity;
       this.props.handleUpdateProduct(this.props.cart.id, num, this.props.cart.product);
    };

    handleQuantity = (e) => {
        this.setState({quantity: e.target.value});
        const inventoryAmount = this.props.cart.inventory;
        if (e.target.value > inventoryAmount) {
            this.showAlert(inventoryAmount);
        }
    };

    showAlert = (inventory) => {
        const message =  'Number exceeds inventory of ' + inventory;
        this.msg.error(message, {
            time: 2000,
            type: 'error',
        })
    };

    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'light',
        time: 5000,
        transition: 'scale'
    };

    addButton = (inventory, quantity) => {
        if (inventory < quantity ||  quantity <= 0) {
           return   'disable'
        } else {
            return ''
        }
    };

   removeButton = (cart, quantity) => {
        if (cart <= 0 || quantity > cart) {
            return  'disable'
        } else {
          return '';
        }
   };

    render() {
        return (
            <div className="row justify-content-center product">
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="inventory"><p>{this.props.cart.inventory}</p></span>
                        <div className="col-3 cart">
                            <img className="product-img" src={this.props.cart.image} style={{width:80}} alt={this.props.cart.product}/>
                        </div>
                        <div className="col-3 cart">
                            <label className="cart">{this.props.cart.product}</label>
                        </div>
                        <div className="col-6 cart">
                            <button className="btn btn-primary cart remove" onClick={(e) => this.handleRemoveProduct(e) } disabled={this.removeButton(this.props.cart.quantity, this.state.quantity)}>
                                <i className="fa fa-minus" aria-hidden="true"/>
                            </button>
                            <input type="number" max={this.props.cart.inventory} min={0} onInput = {this.handleQuantity} placeholder='#' value={this.state.quantity}/>
                            <button className="btn btn-primary cart add" onClick={(e) => this.handleAddProduct(e) } disabled={this.addButton(this.props.cart.inventory, this.state.quantity)}>
                        <i className="fa fa-plus" aria-hidden="true"/>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Cart;