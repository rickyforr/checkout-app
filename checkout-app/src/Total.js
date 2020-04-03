import React, { Component } from "react";
import "./App.css";

/*
 * Renders a componet for displaying the total, discount and subtotal amounts.
 */
class Total extends Component {
  render() {
    const { discount, subtotal } = this.props;

    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>-</td>
              <td>${subtotal}</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>-</td>
              <td className="promo">-${discount}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>-</td>
              <td data-name="total">${subtotal - discount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Total;
