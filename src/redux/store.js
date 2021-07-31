import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import filersReducer from "./reducer/filters-reducer";
import pizzasReducer from "./reducer/pizzas-reducer";
import thunk from "redux-thunk";
import cartReducer from "./reducer/cart-reducer";

const rootReducer = combineReducers({
    filters: filersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)))


window.store = store

export default store
