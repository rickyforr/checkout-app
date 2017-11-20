export function updateCart (cartObj, inventoryObj, quantity, id) {
    const products = cartObj.map((product) => {
        if (product.id === id) {
            const total = product.quantity + Number(quantity);
            if (total <= inventoryObj[product.product].quantity) {
                product.quantity = product.quantity + Number(quantity);
            }
        }
        return product;
    });
    return products
}

export function updateInventory (item, quantity, inventoryObj) {
    const filterItem = [];
    for (let i in inventoryObj) {
        if (i !== item) {
            filterItem.push(i)
        }
    }
    const filtered = Object.keys(inventoryObj)
        .filter(key => filterItem.includes(key))
        .reduce((obj, key) => {
            obj[key] = inventoryObj[key];
            return obj;
        }, {});

    const copy = Object.assign({}, inventoryObj);
    copy[item].quantity = inventoryObj[item].quantity - quantity;
    console.log('NEW COPY', copy);

    let stateCopy = Object.assign({}, filtered, copy);

    return stateCopy
}

export function getSubtotal (cart, inventory) {
    const quantity = [];
    cart.forEach(function (element) {
        quantity.push(element.quantity);
    });
    console.log('FROM GETSUBTOTAL quantity', quantity);

    const prices = [];
    for (let product in inventory) {
        prices.push(inventory[product].price)
    }
    console.log('FROM GETSUBTOTAL price', prices);

    let sum = 0;
    for (let i = 0; i < quantity.length; i++) {
        sum += quantity[i] * prices[i];
    }
    return sum
}


