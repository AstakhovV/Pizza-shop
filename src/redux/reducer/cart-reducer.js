
const InitialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0
}

const cartReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            return {
                ...state,
                items: {
                    [action.payload.id]:[
                        ...state.items[action.payload.id],
                        action.payload
                    ]
                },
                totalPrice : state.totalPrice + action.payload,
                itemsCount : state.itemsCount + 1
            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                itemsCount: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer