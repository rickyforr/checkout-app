import React, { Component } from 'react';
import './App.css';
import Cart from './Cart'
import Receipt from './Receipt'
import Total from './Total'

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
                {"id": 1, "product": "eggs", "quantity": 0, "add_button": ''},
                {"id": 2, "product": "cookies", "quantity": 0},
                {"id": 3, "product": "steak", "quantity": 0}
            ],
            "total": 0
        }
    }

   handleAddProduct = function (id, quantity) {
        console.log('from App handleAdd', 'num:',quantity, 'id:',id);
        const products = this.state.cart.map((product) => {
            if (product.id === id) {
                const total =  product.quantity + Number(quantity);
                if ( total <= this.state.inventory[product.product].quantity) {
                    product.quantity = product.quantity + Number(quantity);
                    product.add_button = '';

                } else {
                    product.add_button = 'disabled';
                }
            }
            return product;
        });
       this.setState({'products': this.state.products, 'cart': products });
       console.log('update state from App', this.state)
    };

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Checkout App</h1>
        </header>
          <div className="container-fluid">
          {this.state.cart.map((cart) => <Cart inventory={this.state.inventory} cart={cart} key={cart.id}  handleAddProduct={(id, quantity) => this.handleAddProduct(id, quantity)}/> )}
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
