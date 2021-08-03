import axios from "axios";

const InitialState = {
    items: [],
    isLoaded: false
}

const pizzasReducer = (state = InitialState, action) => {
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
    setLoaded: (val) => ({type: 'SET_LOADED', payload: val}),
    setPizzas: (items) => ({type: 'SET_PIZZAS', payload: items})
}


export const fetchPizza = (sort, category)=> (dispatch) => {
    dispatch(actionsPizza.setLoaded(false))
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sort.type}&_order=${sort.order}`)
        .then(({data}) =>
            dispatch(actionsPizza.setPizzas(data))
        )
}

/*type ItemsType ={
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

type ThunkType = BaseThunkType<ActionsType>*/

export default pizzasReducer