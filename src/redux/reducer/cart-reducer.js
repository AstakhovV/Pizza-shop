
const InitialState = {
    items: [],
    totalPrice: 0,
    itemsCount: 0
}

const cartReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = action.payload
            return {
                ...state,
                items: [...state.items, currentPizzaItems],
                totalPrice: state.totalPrice + action.payload.price,
                itemsCount: state.itemsCount + 1
            }
        }
        case 'CLEAR_CART':
            return {
                items: [],
                totalPrice: 0,
                itemsCount: 0
            }
        case 'REMOVE_CART_ITEM':
            const newItems = [
                ...state.items
            ]
            const priceDelete = newItems.filter(item => item.randomKey === action.payload)[0].price
            const indexItem = newItems.indexOf(newItems.filter(item => item.randomKey === action.payload)[0])
            newItems.splice(indexItem,1)

            return {
                ...state,
                items: newItems,
                totalPrice : state.totalPrice - priceDelete,
                itemsCount : state.itemsCount - 1
            }
        default:
            return state;
    }
}

export default cartReducer