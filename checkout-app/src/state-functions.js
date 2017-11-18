
export function updateInventory (item, quantity, inventoryObj) {
    const allowed = [];
    for (let i in inventoryObj) {
        if (i !== item) {
            allowed.push(i)
        }
    }
    const filtered = Object.keys(inventoryObj)
        .filter(key => allowed.includes(key))
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


