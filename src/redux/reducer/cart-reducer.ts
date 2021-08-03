import {InferActionsTypes} from "../store";

const InitialState = {
    items: [] as Array<PizzaObjTyp>,
    totalPrice: 0 as number,
    itemsCount: 0 as number
}

const cartReducer = (state = InitialState, action: ActionsType):InitialStateType => {
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
        case 'MINUS_CART_ITEM': {
            const newItems = [
                ...state.items
            ]
            const priceDelete = newItems.filter(item => item.randomKey === action.payload)[0].price
            newItems.reverse()
            const indexItem = newItems.indexOf(newItems.filter(item => item.randomKey === action.payload)[0])
            newItems.splice(indexItem, 1)
            newItems.reverse()

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - priceDelete,
                itemsCount: state.itemsCount - 1
            }
        }
        case 'PLUS_CART_ITEM': {
            const newItems = [
                ...state.items
            ]
            const newPizza = newItems.filter(item => item.randomKey === action.payload)[0]
            newPizza.randomKey = Math.floor(Math.random()*1000000)
            const priceAdd = newPizza.price
            newItems.push(newPizza)
            return {
                ...state,
                items: newItems,
                totalPrice : state.totalPrice + priceAdd,
                itemsCount : state.itemsCount + 1
            }
        }
        case 'REMOVE_CART_ITEM': {
            const newItems = [
                ...state.items
            ]
            const newPizza = newItems.filter(item => item.randomKey === action.payload)[0]
            const pizzaArrDelete = newItems.filter(item =>{
                return (item.name === newPizza.name && item.size === newPizza.size && item.type === newPizza.type)
            } )
            for (let item of pizzaArrDelete){
                // @ts-ignore
                newItems.splice(item, 1)
            }
            return {
                ...state,
                items: newItems,
                totalPrice : state.totalPrice - newPizza.price * pizzaArrDelete.length,
                itemsCount : state.itemsCount - pizzaArrDelete.length
            }
        }

        default:
            return state;
    }
}


export const actions = {
    addPizzaToCart: (pizzaObj: PizzaObjTyp) => ({type: 'ADD_PIZZA_CART', payload: pizzaObj} as const),
    minusCartItem: (key: number) => ({type: 'MINUS_CART_ITEM', payload: key} as const),
    removeCartItem: (key: number) => ({type: 'REMOVE_CART_ITEM', payload: key} as const),
    plusCartItem: (key: number) => ({type: 'PLUS_CART_ITEM', payload: key} as const),
    clearCart: () => ({type: 'CLEAR_CART'} as const)
}

export type InitialStateType = typeof InitialState
type ActionsType = InferActionsTypes<typeof actions>

export type PizzaObjTyp ={
    id: number,
    name: string,
    value: number,
    imageUrl: string,
    type: number,
    size: number,
    price: number,
    randomKey: number
}

export default cartReducer