import {InferActionsTypes} from "../store";

const InitialState = {
    sortBy: {
        type:'rating' as string,
        order: 'desc' as string
    } as SortBy,
    category: null as null | number,

}

const filersReducer = (state = InitialState, action: ActionsType): InitialStateType => {
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

export const actionsFilters = {
    setSortBy: ({type, order}: SortBy) => ({type: 'SET_SORT_BY', payload: {type, order}} as const),
    setCategory: (catIndex: number | null) => ({type: 'SET_CATEGORY', payload: catIndex} as const)
}


export type SortBy = {
    type: string,
    order: string
};

export type InitialStateType = typeof InitialState
type ActionsType = InferActionsTypes<typeof actionsFilters>

export default filersReducer