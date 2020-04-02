import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cart from "./Cart";

const state = {
  cart: [
    {
      id: 1,
      product: "test_product1",
      quantity: 0,
      image: "test.png",
      price: 3,
      inventory: 20,
      discount: {
        type: "SALE",
        price: 1
      }
    },
    {
      id: 2,
      product: "test_product2",
      quantity: 0,
      image: "test2.png",
      price: 5,
      inventory: 15,
      discount: {
        type: "2FOR1"
      }
    }
  ],
  subtotal: 0,
  discount: 0
};

configure({ adapter: new Adapter() });
it("should render cart for each product", () => {
  const component = mount(<App />);
  component.setState({ cart: state.cart });
  const cart = component.find("[data-name='cart']");

  expect(cart.length).toBe(2);
});
