import Total from "./Total";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";

Enzyme.configure({ adapter: new Adapter() });

it("should calculate and display correct total", () => {
  const subtotal = 10;
  const discount = 9;

  const component = shallow(<Total subtotal={subtotal} discount={discount} />);
  const total = component.find('[data-name="total"]');

  expect(total.length).toBe(1);
  expect(total.text()).toBe("$1");
});
