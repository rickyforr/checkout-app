import React, { Component } from 'react';
import './App.css';
import logo from './checkout-logo.png';


class Header extends Component {
    shouldComponentUpdate(nextProps) {
        console.log('RECEIPT COMPONENT', nextProps)
        return true
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-primary ">
                <span className="navbar-brand" href="#">
                    <img src={logo} width="75" height="75" className="d-inline-block align-top" alt="FoodJS"/>
                </span>
            </nav>
        );
    }
}

export default Header;
