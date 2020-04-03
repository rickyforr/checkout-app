import Cart from "./Cart";
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const cart = {
  id: 1,
  product: "test_product",
  quantity: 1,
  image: "test.png",
  price: 3,
  inventory: 20,
  sale: 1,
  discount: {
    type: "SALE"
  }
};

it("should invoke handleUpdateProduct when add button is clicked", () => {
  const addButton = jest.fn();
  const handleUpdateProduct = jest.fn();
  const component = mount(
    <Cart
      cart={cart}
      addButton={addButton}
      handleUpdateProduct={handleUpdateProduct}
    />
  );

  const p = component.find("[data-name='add-button']");
  p.simulate("click");
  expect(handleUpdateProduct).toBeCalledWith(1, 1, "test_product");
});

it("should invoke handleUpdateProduct when remove button is clicked", () => {
  const removeButton = jest.fn();
  const handleUpdateProduct = jest.fn();
  const component = mount(
    <Cart
      cart={cart}
      removeButton={removeButton}
      handleUpdateProduct={handleUpdateProduct}
    />
  );

  const p = component.find("[data-name='remove-button']");
  p.simulate("click");
  expect(handleUpdateProduct).toBeCalledWith(1, -1, "test_product");
});
