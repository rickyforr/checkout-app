import React, { Component } from "react";
import "./App.css";
import logo from "./checkout-logo.png";

/*
 * Renders a header component for the app.
 */
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-primary ">
        <span className="navbar-brand" href="#">
          <img
            src={logo}
            width="75"
            height="75"
            className="d-inline-block align-top"
            alt="FoodJS"
          />
        </span>
      </nav>
    );
  }
}

export default Header;
