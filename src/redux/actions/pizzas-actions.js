import axios from "axios";

export const setLoaded = (val) => ({
    type: 'SET_LOADED',
    payload: val
})

export const fetchPizza = (sort, category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sort.type}&_order=${sort.order}`)
        .then(({data}) =>
            dispatch(setPizzas(data))
        )
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})
