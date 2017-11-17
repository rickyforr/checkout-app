import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Cart'
import Receipt from './Receipt'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'products': {
                eggs: {
                     price: 3,
                     quantity: 20
                },
                cookies: {
                     price: 5,
                     quantity: 15
                },
                steaks: {
                    price: 15,
                    quantity: 10
                }
            },
            'cart': [
                { id: 1, product:'eggs', quantity: 2 },
                { id: 2, product: 'cookies', quantity: 1 },
                { id: 3, product: 'steak', quantity: 1 }
            ]
        }
    }

   handleAddProduct = function (id, quantity) {
        console.log('from App handleAdd', 'num:',quantity, 'id:',id);
        const products = this.state.cart.map((product) => {
            if (product.id === id) {
                product.quantity = quantity;
            }

            return product;
        });

        console.log(products);
       this.setState({'products': this.state.products, 'cart': products})
       console.log(this.state)
    };

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Checkout App</h1>
        </header>
          <div className="container-fluid">
          {this.state.cart.map((cart) => <Cart cart={cart} key={cart.id}  handleAddProduct={(id, quantity) => this.handleAddProduct(id, quantity)}/> )}
          </div>
          <Receipt/>
      </div>
    );
  }
}

export default App;
