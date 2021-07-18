import React, {useEffect} from 'react';
import {Categories, PizzaBlock, PizzaBlockLoading, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../redux/store";
import {OnePizza} from "../App";
import {fetchPizzas} from "../redux/reducers/pizzaReducer";
import {InitialStateType, setSortBy} from "../redux/reducers/filtersReducer";

const Home = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector<RootReducerType, boolean>(state =>state.pizza.isLoading )
    const pizzas = useSelector<RootReducerType, Array<OnePizza>>(state => state.pizza.items)
    const {sortBy, category} = useSelector<RootReducerType, InitialStateType>(state => state.filters)
    useEffect(() => {
           dispatch(fetchPizzas(sortBy, category ))
    },[category, sortBy, dispatch])


    const setNamePopup = (item: string) => {
        dispatch(setSortBy(item))
    }
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    category={category}
                    items={[
                        'Мясные',
                        'Вегетарианские',
                        'Гриль',
                        'Острые',
                        'Закрытые',]}
                />

                <SortPopup
                    activeSort={sortBy}
                    setNamePopup={setNamePopup}
                    items={[
                    {name: 'популярности', type:'rating'},
                    {name: 'цене', type: 'price'},
                    {name: 'алфавиту', type: 'name'},
                ]}
                />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? pizzas.map(pizza => <PizzaBlock key={pizza.id}{...pizza}/>)
                    : Array(12).fill(1).map((item, index) => {
                        return <PizzaBlockLoading key={index} />

                    })



                }
            </div>
        </div>
    );
};

export default Home;
