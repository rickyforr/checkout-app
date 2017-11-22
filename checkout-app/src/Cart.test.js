import Cart from './Cart';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const cart =
    {
        "id": 1,
        "product": "eggs",
        "quantity": 1,
        "image": 'http://www.eatbydate.com/wp-content/uploads/Eggs1.jpg',
        "price": 3,
        "inventory": 20,
        "sale": 1,
        "discount": {
            "type": "SALE"
        }
    };

test('Cart calls handleUpdateProduct when add button is clicked', () => {
    const addButton = jest.fn();
    const handleUpdateProduct = jest.fn();
    const wrapper = mount(
        <Cart cart={cart} addButton={addButton} handleUpdateProduct={handleUpdateProduct}/>
    );

    const p = wrapper.find('.btn.btn-primary.cart.add');
    p.simulate('click');
    expect(handleUpdateProduct).toBeCalledWith(1, 1, "eggs");
});

test('Cart calls handleUpdateProduct when remove button is clicked', () => {
    const removeButton = jest.fn();
    const handleUpdateProduct = jest.fn();
    const wrapper = mount(
        <Cart cart={cart} removeButton={removeButton} handleUpdateProduct={handleUpdateProduct}/>
    );

    const p = wrapper.find('.btn.btn-primary.cart.remove');
    p.simulate('click');
    expect(handleUpdateProduct).toBeCalledWith(1, -1, "eggs");
});
