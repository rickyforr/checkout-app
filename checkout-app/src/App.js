import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Cart'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: {
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
            cart: {
                eggs: 2,
                cookies: 1,
                steak: 1
            }
        }
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
            <p>{this.state.products.eggs.price}</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Cart products={this.state.products} cart={this.state.cart}/>
      </div>
    );
  }
}

export default App;
