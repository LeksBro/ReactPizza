import React from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useSelector} from "react-redux";
import {RootReducerType} from "../redux/store";
import {OnePizza} from "../App";

const Home = () => {

    const pizzas = useSelector<RootReducerType, Array<OnePizza>>(state => state.pizza.items)

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        'Все',
                        'Мясные',
                        'Вегетарианские',
                        'Гриль',
                        'Острые',
                        'Закрытые',]}
                />

                <SortPopup items={['популярности','цене','алфавиту']} />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas && pizzas.map(pizza => <PizzaBlock
                    key={pizza.id}
                    {...pizza}
                />)}
            </div>
        </div>
    );
};

export default Home;
