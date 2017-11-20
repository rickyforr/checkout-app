import React, { Component } from 'react';
import './App.css';
import Cart from './Cart'
import Receipt from './Receipt'
import Total from './Total'
import { updateInventory, updateCart, getSubtotal, getDiscount }from './state-functions'
import Header from "./Header";
import AlertContainer from 'react-alert'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "inventory": {
                "eggs": {"price": 3, "quantity": 20,  "sale": 1.50},
                "cookies": {"price": 5, "quantity": 15},
                "steak": {"price": 15, "quantity": 10}
            },
            "cart": [
                {"id": 1, "product": "eggs", "quantity": 0, "image": 'http://www.eatbydate.com/wp-content/uploads/Eggs1.jpg'},
                {"id": 2, "product": "cookies", "quantity": 0, "image": 'http://d111vui60acwyt.cloudfront.net/product_photos/33961854/smart_20cookie_20pic_20copy_original.jpg'},
                {"id": 3, "product": "steak", "quantity": 0, "image": 'http://static.seriouseats.com/1/braestar/live/pages/steak/images/ribeye.png'}
            ],
            "subtotal": 0,
            "discount": 0
        }
    }

    showAlert = (quantity) => {
       const message =  quantity > 0 ? quantity + 'Item(s) Added To Cart' : quantity * -1 + 'Item(s) Removed From Cart';
        this.msg.show(message, {
            time: 2000,
            type: 'success',
            icon: <img src="path/to/some/img/32x32.png" />
        })
    };

    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'light',
        time: 5000,
        transition: 'scale'
    };

   handleUpdateProduct = function (id, quantity, item) {
       const updatedCart = updateCart(this.state.cart, this.state.inventory, quantity, id);
       const updatedInventory = updateInventory(item, quantity, this.state.inventory);
       if (quantity) {
           this.showAlert(quantity);
       }
       const updatedTotal = getSubtotal(updatedCart, updatedInventory);
       const updatedDiscount = getDiscount(updatedCart, updatedInventory);
       this.setState({ "inventory": updatedInventory,'cart': updatedCart, 'subtotal': updatedTotal, 'discount': updatedDiscount});
    };

    render() {
    return (
      <div className="App">
          <Header/>
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          <div className="container-fluid">
          {this.state.cart.map((cart) => <Cart
              inventory={this.state.inventory}
              cart={cart} key={cart.id}
              handleUpdateProduct={(id, quantity, item) => this.handleUpdateProduct(id, quantity, item)}
          /> )}
          </div>
          <br/>
          <table className="table table-bordered">
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
