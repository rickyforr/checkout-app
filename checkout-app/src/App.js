import React, { Component } from 'react';
import AlertContainer from 'react-alert'

import './App.css';
import Cart from './Cart'
import Receipt from './Receipt'
import Total from './Total'
import { updateInventory, updateCart, getSubtotal, getDiscount }from './state-functions'
import Header from "./Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "cart": [
                {
                    "id": 1,
                    "product": "eggs",
                    "quantity": 0,
                    "image": 'http://res.cloudinary.com/lyvtg7cjl/image/upload/v1511334751/eggs_h551ml.png',
                    "price": 3,
                    "inventory": 20,
                    "discount": {
                        "type": "SALE",
                        "price": 1
                    }
                },
                {
                    "id": 2,
                    "product": "cookies",
                    "quantity": 0,
                    "image": 'http://res.cloudinary.com/lyvtg7cjl/image/upload/v1511334751/cookie_cbtctw.png',
                    "price": 5,
                    "inventory": 15,
                    "discount": {
                        "type": "2FOR1"
                    }
                },
                {
                    "id": 3,
                    "product": "steak",
                    "quantity": 0,
                    "image": 'http://res.cloudinary.com/lyvtg7cjl/image/upload/v1511334755/ribeye_j2oqob.png',
                    "price": 15,
                    "inventory": 10,
                    "discount": {
                        "type": 'BUY4',
                        "price": 50
                    }
                }
            ],
            "subtotal": 0,
            "discount": 0
        }
    }

    showAlert = (quantity) => {
       const message =  quantity > 0 ? quantity + ' Item(s) Added To Cart' : quantity * -1 + ' Item(s) Removed From Cart';
        this.msg.show(message, {
            time: 2000,
            type: 'success',
        })
    };

    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'light',
        time: 5000,
        transition: 'scale'
    };

   handleUpdateProduct = function (id, quantity) {
       if (quantity) {
           this.showAlert(quantity);
       }
       const updatedCart = updateCart(this.state.cart, quantity, id);
       const updatedTotal = getSubtotal(updatedCart);
       const updatedDiscount = getDiscount(updatedCart);
       this.setState({ 'cart': updatedCart, 'subtotal': updatedTotal, 'discount': updatedDiscount});
    };

   render() {
        return (
            <div className="App">
                  <Header/>
                  <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                  <div className="container-fluid cart-container">
                  {this.state.cart.map((cart) => <Cart
                      inventory={this.state.inventory}
                      cart={cart} key={cart.id}
                      handleUpdateProduct={(id, quantity) => this.handleUpdateProduct(id, quantity)}
                  /> )}
                  </div>
                  <br/>
                  <table className="table table-bordered table-dark">
                      <tbody>
                      <tr className="bg-primary receipt-table">
                          <th>Product</th>
                          <th>Price</th>
                          <th>Total</th>
                      </tr>
                      {this.state.cart.map((cart) => <Receipt
                          cart={cart} key={cart.id}
                          inventory={this.state.inventory}
                      /> )}
                      </tbody>
                  </table>
                  <Total
                      cart={this.state.cart}
                      inventory={this.state.inventory}
                      subtotal={this.state.subtotal}
                      discount={this.state.discount}
                  />
          </div>
        );
    }
}
export default App;
