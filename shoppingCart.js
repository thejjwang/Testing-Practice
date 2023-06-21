const shoppingCart = {
    cart: [],
    addToCart(item, quantity) {
        const newItem = {
            item: item,
            quantity: quantity
        };
        this.cart.push(newItem);
    } ,
    removeFromCart(item, quantity) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].item === item) {
                this.cart[i].quantity -= quantity;
                if (this.cart[i].quantity <= 0){
                    this.cart.splice(i, 1);
                }
                break;
            }
        }
}
}

module.exports = shoppingCart;