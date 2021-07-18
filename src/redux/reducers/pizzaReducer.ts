import {OnePizza} from "../../App";
import {Dispatch} from "react";
import axios from "axios";

type InitialsStateType = {
   items: Array<OnePizza>
   isLoading: boolean
}
type ActionsType = SetPizzasType | SetLoadingType
const initialState: InitialsStateType = {
    items: [],
    isLoading: true
}

export const pizzaReducer = (state = initialState, action: ActionsType) => {
switch (action.type) {
    case "SET_PIZZAS":{
        return {
            ...state,
            items: action.payload,
            isLoading: true,
        }
    }
    case "SET_LOADING":{
        return {
            ...state,
            isLoading: action.payload
        }
    }
    default:
        return state
}
}

export const setPizzas = (pizzas: Array<OnePizza>) => {
    return {type: 'SET_PIZZAS', payload: pizzas} as const
}

export const setLoading = (payload: boolean) => {
    return{type: 'SET_LOADING', payload } as const
}
type SetPizzasType = ReturnType<typeof setPizzas>
type SetLoadingType = ReturnType<typeof setLoading>



export const fetchPizzas= (sortBy: string, category: number | null) => (dispatch: Dispatch<ActionsType>) => {

    dispatch(setLoading(false))
    axios.get<Array<OnePizza>>(`http://localhost:3001/pizzas?${category !== null ? `category=${category}`: ''}&_sort=${sortBy}&_order=asc`)
        .then(res => dispatch(setPizzas(res.data)))
}