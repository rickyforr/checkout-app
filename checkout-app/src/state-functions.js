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

    const stateCopy = Object.assign({}, filtered, copy);
    return stateCopy
}

export function getSubtotal (cart, inventory) {
    const sum = [];
    cart.forEach(function(element){
        for (let i in inventory) {
            if (i === element.product) {
                sum.push(inventory[i].price * element.quantity)
            }
        }
    });
    const total = sum.reduce((sum, value) => sum + value, 0);
    return total;
}

export function getDiscount (cart, inventory) {
    const sum = [];
    cart.forEach(function(element){
        for (let i in inventory) {
            if (i === element.product && inventory[i].sale) {
                sum.push((inventory[i].price - inventory[i].sale) * element.quantity)
            }
        }
    });
    const total = sum.reduce((sum, value) => sum + value, 0);
    return total;
}



