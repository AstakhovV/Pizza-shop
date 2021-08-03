import React, {useCallback, useEffect} from 'react'
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {actionsFilters} from "../redux/reducer/filters-reducer";
import {fetchPizza} from "../redux/reducer/pizzas-reducer";
import {PizzaLoadingBlock} from "../components/PizzaBlock/PizzaLoadingBlock";
import {actions} from "../redux/reducer/cart-reducer";

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

    const result = cartItems.reduce(function(acc, el) {
        acc[el.name] = (acc[el.name] || 0) + 1;
        return acc;
    }, {})

    const dispatchByCategory = useCallback((name) => {
        dispatch(actionsFilters.setCategory(name))
    }, [dispatch])

    const dispatchBySort = useCallback((type) => {
        dispatch(actionsFilters.setSortBy(type))
    }, [dispatch])

    const onAddPizza = (obj) => {
        dispatch(actions.addPizzaToCart(obj))
    }

    useEffect(() => {
            dispatch(fetchPizza(activeSort, activeCategory))
    }, [activeSort, activeCategory, dispatch])

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
                            randomKey={Math.floor(Math.random()*1000000)}
                            onClickAddPizza={onAddPizza}
                            key={item.id}
                            addedCount={result[item.name]}
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