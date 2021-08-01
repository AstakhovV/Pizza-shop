export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})

export const removeCartItem = (key) => ({
    type: 'REMOVE_CART_ITEM',
    payload: key
})
export const clearCart = () => ({
    type: 'CLEAR_CART',
})