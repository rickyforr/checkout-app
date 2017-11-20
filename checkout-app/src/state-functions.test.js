import { updateCart, updateInventory, getSubtotal, getDiscount } from './state-functions';

test('updateCart adds products to cart', () => {
    const state = {
        "inventory": {
            "eggs": {"price": 3, "quantity": 20,  "sale": 1.50},
            "cookies": {"price": 5, "quantity": 15},
            "steak": {"price": 15, "quantity": 10}
        },
        "cart": [
            {"id": 1, "product": "eggs", "quantity": 0 },
            {"id": 2, "product": "cookies", "quantity": 0 },
            {"id": 3, "product": "steak", "quantity": 0 }
        ],
        "subtotal": 0,
        "discount": 0
    };

    const finCartState = updateCart(state.cart, state.inventory, 5, 1);
    expect(finCartState[0]).toEqual(
        {"id": 1, "product": "eggs", "quantity": 5 }
    );
});

test('updateInventory removes products from inventory when they are added to the cart', () => {
    const state = {
        "inventory": {
            "eggs": {"price": 3, "quantity": 20,  "sale": 1.50},
            "cookies": {"price": 5, "quantity": 15},
            "steak": {"price": 15, "quantity": 10}
        },
        "cart": [
            {"id": 1, "product": "eggs", "quantity": 0 },
            {"id": 2, "product": "cookies", "quantity": 0 },
            {"id": 3, "product": "steak", "quantity": 0 }
        ],
        "subtotal": 0,
        "discount": 0
    };

    const finInventoryState = updateInventory("eggs", 5, state.inventory);
    expect(finInventoryState["eggs"]).toEqual(
        {"price": 3, "quantity": 15,  "sale": 1.50}
    );
});

test('getSubtotal takes in cart and inventory and returns the current subtotal', () => {
    const state = {
        "inventory": {
            "eggs": {"price": 3, "quantity": 20,  "sale": 1.50},
            "cookies": {"price": 5, "quantity": 15},
            "steak": {"price": 15, "quantity": 10}
        },
        "cart": [
            {"id": 1, "product": "eggs", "quantity": 2 },
            {"id": 2, "product": "cookies", "quantity": 2 },
            {"id": 3, "product": "steak", "quantity": 0 }
        ],
        "subtotal": 0,
        "discount": 0
    };

    const finSubtotalState = getSubtotal(state.cart, state.inventory);
    expect(finSubtotalState).toEqual(16);
});

test('getDiscount takes in cart and inventory and returns the current total discount', () => {
    const state = {
        "inventory": {
            "eggs": {"price": 3, "quantity": 20,  "sale": 1},
            "cookies": {"price": 5, "quantity": 15},
            "steak": {"price": 15, "quantity": 10}
        },
        "cart": [
            {"id": 1, "product": "eggs", "quantity": 2 },
            {"id": 2, "product": "cookies", "quantity": 2 },
            {"id": 3, "product": "steak", "quantity": 0 }
        ],
        "subtotal": 0,
        "discount": 0
    };

    const finDiscountState = getDiscount(state.cart, state.inventory);
    expect(finDiscountState).toEqual(4);
});



