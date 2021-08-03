import {combineReducers, createStore, compose, applyMiddleware, Action} from "redux";
import filersReducer from "./reducer/filters-reducer";
import pizzasReducer from "./reducer/pizzas-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import cartReducer from "./reducer/cart-reducer";

const rootReducer = combineReducers({
    filters: filersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)))


// @ts-ignore
window.store = store

export default store
