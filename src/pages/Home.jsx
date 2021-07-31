import React, {useCallback, useEffect} from 'react'
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters-actions";
import {fetchPizza} from "../redux/actions/pizzas-actions";
import {PizzaLoadingBlock} from "../components/PizzaBlock/PizzaLoadingBlock";
import {addPizzaToCart} from "../redux/actions/cart-actions";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const  sortItem = [
    {name: 'популярности', type: 'rating', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
]

export const Home = () => {
    const dispatch = useDispatch()
    const itemsPizza = useSelector(state => state.pizzas.items)
    const itemsLoading = useSelector(state => state.pizzas.isLoaded)
    const activeSort = useSelector(state => state.filters.sortBy)
    const cartItems = useSelector(state => state.cart.items)
    const activeCategory = useSelector(state => state.filters.category)


    const dispatchByCategory = useCallback((name) => {
        dispatch(setCategory(name))
    }, [dispatch])

    const dispatchBySort = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [dispatch])

    const onAddPizza = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    useEffect(() => {
        dispatch(fetchPizza(activeSort, activeCategory))
    }, [activeSort, activeCategory])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeSort={activeSort}
                    activeCategory={activeCategory}
                    onClickItem={dispatchByCategory}
                    items={categoryNames}/>
                <SortPopup items={sortItem}
                           activeSort={activeSort.type}
                           onClickSort={dispatchBySort}/>
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { itemsLoading ?
                    itemsPizza.map(item => (
                        <PizzaBlock
                            onClickAddPizza={onAddPizza}
                            key={item.id}
                            addedCount={cartItems[item.id] && cartItems[item.id].length}
                            {...item}/>
                    ))
                    : Array(12).fill(0).map((item, index) =>(
                            <PizzaLoadingBlock key={index}/>)
                        )

                }
            </div>
        </div>
    )
}