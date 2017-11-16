import React, { Component } from 'react';
import './App.css';

class Cart extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <h1>Cart</h1>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <lable for="eggs">eggs</lable>
                            <input type="number" id="eggs"/>
                            <button>add</button>
                            <button>remove</button>
                        </li>
                        <li className="list-group-item">cookies
                            <input type="number"/>
                            <button>add</button>
                            <button>remove</button>
                        </li>
                        <li className="list-group-item">steak
                            <input type="number"/>
                            <button>add</button>
                            <button>remove</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;