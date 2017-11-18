import React, { Component } from 'react';
import './App.css';
import Cart from './Cart'
import Receipt from './Receipt'
import Total from './Total'
import { updateInventory }from './state-functions'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "inventory": {
                "eggs": {"price": 3, "quantity": 20},
                "cookies": {"price": 5, "quantity": 15},
                "steak": {"price": 15, "quantity": 10}
            },
            "cart": [
                {"id": 1, "product": "eggs", "quantity": 0, "image": 'http://www.eatbydate.com/wp-content/uploads/Eggs1.jpg'},
                {"id": 2, "product": "cookies", "quantity": 0, "image": 'http://d111vui60acwyt.cloudfront.net/product_photos/33961854/smart_20cookie_20pic_20copy_original.jpg'},
                {"id": 3, "product": "steak", "quantity": 0, "image": 'http://static.seriouseats.com/1/braestar/live/pages/steak/images/ribeye.png'}
            ],
            "total": 0
        }
    }

   handleAddProduct = function (id, quantity, item) {
        console.log('from App handleAdd', 'num:',quantity, 'id:',id);
        //add product(s) to cart
        const products = this.state.cart.map((product) => {
            if (product.id === id) {
                const total =  product.quantity + Number(quantity);
                if ( total <= this.state.inventory[product.product].quantity) {
                    product.quantity = product.quantity + Number(quantity);

                }
            }
            return product;
        });

       const inventoryCopy = updateInventory(item, quantity, this.state.inventory);

       this.setState({ "inventory": inventoryCopy,'cart': products });
       console.log('UPDATE INVENTORY', this.state);

       console.log('update state from App', this.state);
    };

    render() {
    return (
      <div className="App">
          <nav className="navbar navbar-inverse bg-primary navbar-fixed-top">
              <span>
          <img className="store-logo" src="http://res.cloudinary.com/lyvtg7cjl/image/upload/v1510993020/checkout-logo_ym34gb.png"/>
              <p className="date">Nov 19 2017</p>
              </span>
          </nav>
          <div className="container-fluid">
          {this.state.cart.map((cart) => <Cart inventory={this.state.inventory} cart={cart} key={cart.id}  handleAddProduct={(id, quantity, item) => this.handleAddProduct(id, quantity, item)}/> )}
          </div>
          <h1>Receipt</h1>
          <table className="table">
              <tbody>
              <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Total</th>
              </tr>
          {this.state.cart.map((cart) => <Receipt cart={cart} key={cart.id} inventory={this.state.inventory}/> )}
              </tbody>
          </table>
          <Total cart={this.state.cart} inventory={this.state.inventory}/>
      </div>
    );
  }
}

export default App;
