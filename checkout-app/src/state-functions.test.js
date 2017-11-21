import { updateCart, updateInventory, getSubtotal, getDiscount } from './state-functions';

test('updateCart adds products to cart and remove same amount from inventory', () => {
    const state = {
        "cart": [
            {"id": 1, "product": "eggs", "quantity": 0, "price": 3, "sale": 1.50, "inventory": 20},
            {"id": 2, "product": "cookies", "quantity": 0, "price": 5, "inventory": 15},
            {"id": 3, "product": "steak", "quantity": 0,  "price": 15, "inventory": 10}
        ],
        "subtotal": 0,
        "discount": 0
    };

    const finCartState = updateCart(state.cart, 5, 1);
    expect(finCartState[0]).toEqual(
        {"id": 1, "product": "eggs", "quantity": 5, "price": 3, "sale": 1.50, "inventory": 15 },
    );
});

test('getSubtotal takes in cart and inventory and returns the current subtotal', () => {
    const state = {
        "cart": [
            {"id": 1, "product": "eggs", "quantity": 2, "price": 3, "sale": 1.50, "inventory": 18},
            {"id": 2, "product": "cookies", "quantity": 2, "price": 5, "inventory": 15},
            {"id": 3, "product": "steak", "quantity": 0,  "price": 15, "inventory": 9}
        ],
        "subtotal": 0,
        "discount": 0
    };

    const finSubtotalState = getSubtotal(state.cart);
    expect(finSubtotalState).toEqual(16);
});

test('getDiscount takes in cart and inventory and returns the current total discount', () => {
    const state = {
        "cart": [
            {"id": 1, "product": "eggs", "quantity": 2, "price": 3, "sale": 1, "inventory": 20, "discount": {"type": "SALE"}},
            {"id": 2, "product": "cookies", "quantity": 0, "price": 5, "inventory": 15, "discount": {"type": "NONE"}},
            {"id": 3, "product": "steak", "quantity": 0,  "price": 15, "inventory": 10, "discount": {"type": "NONE"}}
        ],
        "subtotal": 0,
        "discount": 0
    };

    const finDiscountState = getDiscount(state.cart);
    expect(finDiscountState).toEqual(4);
});



