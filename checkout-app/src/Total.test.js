import Total from './Total';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

const cart =
    {
        "id": 1,
        "product": "eggs",
        "quantity": 0,
        "image": 'http://www.eatbydate.com/wp-content/uploads/Eggs1.jpg',
        "price": 3,
        "inventory": 20,
        "sale": 1,
        "discount": {
            "type": "SALE"
        }
    };

it('Receipt component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Total cart={cart}/>, div);
});
