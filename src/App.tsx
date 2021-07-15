import React, {useEffect, useState} from 'react';
import './scss/app.scss'
import {Header,Home,Cart} from "./components";
import {Route} from 'react-router-dom'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setPizzas} from "./redux/reducers/pizzaReducer";
import {RootReducerType} from "./redux/store";

export type OnePizza = {
    id: number,
    imageUrl: string
    name: string,
    types: Array<number>,
    sizes: Array<number>,
    price: number
    category: number
    rating: number
}

export  type PizzasType = Array<OnePizza>


function App() {
    const dispatch = useDispatch()
    const isLoading = useSelector<RootReducerType, boolean>(state =>state.pizza.isLoading )

    useEffect(() => {
       axios.get<Array<OnePizza>>('http://localhost:3001/pizzas')
           .then(res => dispatch(setPizzas(res.data)))
    },[])

  return (
      <div className="wrapper">

        <Header />

        <div className="content">

            <Route path={'/'} exact component={Home}/>
            <Route path={'/cart'} exact component={Cart}/>

        </div>
      </div>

  );
}

export default App;
