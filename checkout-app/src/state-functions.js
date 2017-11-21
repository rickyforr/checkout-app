export function updateCart (cartObj, quantity, id) {
   const cart = cartObj.map((product) => {
       if (product.id === id) {
           if (quantity <= product.inventory) {
                product.quantity = product.quantity + Number(quantity);
                product.inventory = product.inventory - Number(quantity);
            }
        }
        return product;
    });
   return cart
}

export function getSubtotal (cart) {
    const sum = [];
    cart.forEach(function(element){
        sum.push(element.price * element.quantity)
    });
    return sum.reduce((sum, value) => sum + value, 0);
}

export function getDiscountType (cart) {
    const sum = [];
    cart.forEach(function(element){
        if (element.sale) {
            sum.push((element.price - element.sale) * element.quantity)
        }
    });
    return sum.reduce((sum, value) => sum + value, 0);
}

export function getDiscount (cart, quantity) {
    const sum = [];
    cart.forEach(function(element) {
        switch (element.discount.type) {
            case 'SALE':
                if (element.sale) {
                    sum.push((element.price - element.sale) * element.quantity)
                }
                break;
            case '2FOR1':
                console.log(quantity);
                break;
        }
    });
    const total = sum.reduce((sum, value) => sum + value, 0);
    console.log('SALE CASE', total);
    return total;
}
