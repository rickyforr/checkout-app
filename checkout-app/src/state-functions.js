export function updateCart (cart, quantity, id) {
   const cartUpdated = cart.map((product) => {
       if (product.id === id) {
           if (quantity <= product.inventory) {
                product.quantity = product.quantity + Number(quantity);
                product.inventory = product.inventory - Number(quantity);
            }
        }
        return product;
    });
   return cartUpdated
}

export function getSubtotal (cart) {
    const sum = [];
    cart.forEach(function(element){
        sum.push(element.price * element.quantity)
    });
    return sum.reduce((sum, value) => sum + value, 0);
}

export function getDiscount (cart) {
    const sum = [];
    cart.forEach(function(element) {
        switch (element.discount.type) {
            case 'SALE':
                if (element.sale) {
                    sum.push((element.discount.price - element.sale) * element.quantity)
                }
                break;
            case '2FOR1':
                let remainder = element.quantity % 2;
                let divided;
                if (!remainder) {
                    divided = element.quantity / 2
                } else {
                    divided = (element.quantity - 1) / 2;
                }
                if (divided) {
                    sum.push(element.price * divided);
                } else {
                    sum.push(0);
                }
                break;
            case 'BUY4':
                remainder = element.quantity % 4;
                if (!remainder && element.quantity >= 4) {
                    divided = element.quantity / 4
                } else  {
                    divided = (element.quantity - remainder) / 4;
                }
                if (divided) {
                    sum.push(10 * divided);
                } else {
                    sum.push(0);
                }
                break;
        }
    });
    return sum.reduce((sum, value) => sum + value, 0);;
}
