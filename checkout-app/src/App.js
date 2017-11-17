import React, { Component } from 'react';
import './App.css';
import Cart from './Cart'
import Receipt from './Receipt'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "products": {
                "eggs": { "price": 3, "quantity": 20 },
                "cookies": { "price": 5, "quantity": 15 },
                "steaks": { "price": 15, "quantity": 10 }
            },
            "cart": [
                { "id": 1, "product": "eggs", "quantity": 2 },
                { "id": 2, "product": "cookies", "quantity": 1 },
                { "id": 3, "product": "steak", "quantity": 1 }
            ]
        }
    }

   handleAddProduct = function (id, quantity) {
        console.log('from App handleAdd', 'num:',quantity, 'id:',id);
        const products = this.state.cart.map((product) => {
            if (product.id === id) {
                product.quantity = product.quantity + Number(quantity);
            }
            return product;
        });
       this.setState({'products': this.state.products, 'cart': products});
       console.log(this.state)
    };

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Checkout App</h1>
        </header>
          <div className="container-fluid">
          {this.state.cart.map((cart) => <Cart inventory={this.state.products} cart={cart} key={cart.id}  handleAddProduct={(id, quantity) => this.handleAddProduct(id, quantity)}/> )}
          </div>
          <h1>Receipt</h1>
          <table className="table">
              <tbody>
              <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Total</th>
              </tr>
          {this.state.cart.map((cart) => <Receipt cart={cart} key={cart.id}/> )}
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

export default App;
