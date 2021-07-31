
const InitialState = {
    sortBy: {
        type:'rating',
        order: 'desc'
    },
    category: null,

}

const filersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }

        default:
            return state;
    }
}

export default filersReducer