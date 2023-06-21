const shoppingCart = require('./shoppingCart');
test('addToCart(item, quantity) adds an item with a specified quantity to cart', () => {
    shoppingCart.addToCart('apple', 2);
    expect(shoppingCart.cart.length).toBe(1);
    expect(shoppingCart.cart[0].item).toBe('apple');});
test('removeFromCart(item, quantity) Removes a specified quantity of an item from the shopping cart', () => {
    shoppingCart.removeFromCart('apple', 2);
    expect(shoppingCart.cart.length).toBe(0);});


