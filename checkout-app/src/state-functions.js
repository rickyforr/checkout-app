export const updateCart = (cart, quantity, id) => {
  const cartUpdated = cart.map(product => {
    if (product.id === id) {
      if (quantity <= product.inventory) {
        product.quantity = product.quantity + Number(quantity);
        product.inventory = product.inventory - Number(quantity);
      }
    }
    return product;
  });
  return cartUpdated;
};

export const getSubtotal = cart => {
  const sum = [];
  cart.forEach(product => {
    sum.push(product.price * product.quantity);
  });
  return sum.reduce((sum, value) => sum + value, 0);
};

export const getDiscount = cart => {
  const sum = [];
  cart.forEach(product => {
    switch (product.discount.type) {
      case "SALE":
        if (product.discount.type) {
          sum.push((product.price - product.discount.price) * product.quantity);
        }
        break;
      case "2FOR1":
        const dividedBy2 = Math.floor(product.quantity / 2);
        if (dividedBy2) {
          sum.push(product.price * dividedBy2);
        }
        break;
      case "BUY4":
        const dividedBy4 = Math.floor(product.quantity / 4);
        if (dividedBy4) {
          sum.push(10 * dividedBy4);
        }
        break;
    }
  });
  return sum.reduce((sum, value) => sum + value, 0);
};
