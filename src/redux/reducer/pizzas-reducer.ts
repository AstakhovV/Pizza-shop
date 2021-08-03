import axios from "axios";
import {BaseThunkType, InferActionsTypes} from "../store";
import {SortBy} from "./filters-reducer";

const InitialState = {
    items: [] as Array<ItemsType>,
    isLoaded: false as boolean
}

const pizzasReducer = (state = InitialState, action: ActionsType):{ items: Array<ItemsType>; isLoaded: boolean } => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state;
    }
}

export const actionsPizza = {
    setLoaded: (val: boolean) => ({type: 'SET_LOADED', payload: val} as const),
    setPizzas: (items: Array<ItemsType>) => ({type: 'SET_PIZZAS', payload: items} as const)
}

export const fetchPizza = (sort: SortBy, category: null | number): (dispatch) => void => (dispatch) => {
    dispatch(actionsPizza.setLoaded(false))
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sort.type}&_order=${sort.order}`)
        .then(({data}) =>
            dispatch(actionsPizza.setPizzas(data))
        )
}

type ItemsType = {
    id: number,
    imageUrl: string,
    name: string,
    types: Array<number>,
    sizes: Array<number>,
    price: Array<number>,
    category: number,
    rating: number
}
export type InitialStateType = typeof InitialState
type ActionsType = InferActionsTypes<typeof actionsPizza>
type ThunkType = BaseThunkType<ActionsType>

export default pizzasReducer