import Receipt from "./Receipt";
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

it("should render discounted price for product on sale.", () => {
  const cart = {
    id: 1,
    product: "eggs",
    quantity: 5,
    image: "http://www.eatbydate.com/wp-content/uploads/Eggs1.jpg",
    price: 3,
    inventory: 20,
    sale: 1,
    discount: {
      type: "SALE",
      price: 1
    }
  };

  const component = mount(<Receipt cart={cart} />);
  const promo = component.find("[data-name='sale-promo']");

  expect(promo.text()).toBe("SALE $1");
  expect(promo.length).toBe(1);
});

it("should render discounted price for product on 2 for 1 promo if quantity is greater than 2.", () => {
  const cart = {
    id: 2,
    product: "test_product2",
    quantity: 2,
    image: "test2.png",
    price: 5,
    inventory: 15,
    discount: {
      type: "2FOR1"
    }
  };

  const component = mount(<Receipt cart={cart} />);
  const promo = component.find("[data-name='2for1-promo']");

  expect(promo.text()).toBe("2FOR1 x 1");
  expect(promo.length).toBe(1);
});

it("should render discounted price for product on buy 4 promo", () => {
  const cart = {
    id: 3,
    product: "steak",
    quantity: 5,
    image:
      "http://res.cloudinary.com/lyvtg7cjl/image/upload/v1511334755/ribeye_j2oqob.png",
    price: 15,
    inventory: 10,
    discount: {
      type: "BUY4",
      price: 50
    }
  };

  const component = mount(<Receipt cart={cart} />);
  const promo = component.find("[data-name='buy4-promo']");

  expect(promo.text()).toBe("4 @ $50 x 1");
  expect(promo.length).toBe(1);
});
