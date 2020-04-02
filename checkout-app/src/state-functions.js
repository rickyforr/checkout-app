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
        let remainderFrom2 = product.quantity % 2;
        let dividedBy2;
        if (!remainderFrom2) {
          dividedBy2 = product.quantity / 2;
        } else {
          dividedBy2 = (product.quantity - 1) / 2;
        }
        if (dividedBy2) {
          sum.push(product.price * dividedBy2);
        } else {
          sum.push(0);
        }
        break;
      case "BUY4":
        let amount = product.quantity % 4;
        let divideds;
        if (!amount && product.quantity >= 4) {
          divideds = product.quantity / 4;
        } else {
          divideds = (product.quantity - amount) / 4;
        }
        if (divideds) {
          sum.push(10 * divideds);
        } else {
          sum.push(0);
        }
        break;
    }
  });
  return sum.reduce((sum, value) => sum + value, 0);
};
