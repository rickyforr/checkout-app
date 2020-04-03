import React, { Component } from "react";
import "./App.css";

/*
 * Renders a component for displaying the current order receipt.
 */
class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = { subtotal: 0 };
  }

  componentWillReceiveProps() {
    const subtotal = this.props.cart.quantity * this.props.cart.price;
    this.setState({ subtotal });
  }

  discountType() {
    const { discount, quantity } = this.props.cart;
    switch (discount.type) {
      case "SALE":
        if (discount.price && quantity) {
          return (
            <p data-name="sale-promo" className="promo">
              SALE ${discount.price}
            </p>
          );
        }
        break;
      case "2FOR1":
        if (quantity >= 2) {
          return (
            <p data-name="2for1-promo" className="promo">
              2FOR1 x {Math.floor(quantity / 2)}
            </p>
          );
        }
        break;
      case "BUY4":
        if (quantity >= 4) {
          return (
            <p data-name="buy4-promo" className="promo">
              4 @ ${discount.price} x {Math.floor(quantity / 4)}
            </p>
          );
        }
        break;
      default:
        return <p />;
    }
  }

  discountAmount() {
    const { discount, price, quantity } = this.props.cart;
    switch (discount.type) {
      case "SALE":
        if (discount.price && quantity) {
          return (
            <p data-name="sale-discount" className="promo">
              -{(price - discount.price) * quantity}
            </p>
          );
        }
        break;
      case "2FOR1":
        const dividedby2 = Math.floor(quantity / 2);
        if (dividedby2) {
          return <p className="promo">-{price * dividedby2}</p>;
        }
        break;
      case "BUY4":
        const dividedBy4 = Math.floor(quantity / 4);
        if (dividedBy4) {
          return <p className="promo">-{10 * dividedBy4}</p>;
        }
        break;
      default:
        return <p />;
    }
  }

  render() {
    const { product, quantity, price } = this.props.cart;
    return (
      <tr className="table-dark">
        <td>{product}</td>
        <td>
          {quantity} @ ${price}
          {this.discountType()}
        </td>
        <td>
          {this.state.subtotal}
          {this.discountAmount()}
        </td>
      </tr>
    );
  }
}
export default Receipt;
