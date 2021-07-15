import {OnePizza} from "../../App";

type InitialsStateType = {
   items: Array<OnePizza>
   isLoading: boolean
}
type ActionsType = SetPizzasType
const initialState: InitialsStateType = {
    items: [],
    isLoading: false
}

export const pizzaReducer = (state = initialState, action: ActionsType) => {
switch (action.type) {
    case "SET_PIZZAS":{
        return {
            ...state,
            items: action.payload
        }
    }
    default:
        return state
}
}

export const setPizzas = (pizzas: Array<OnePizza>) => {
    return {type: 'SET_PIZZAS', payload: pizzas}
}
type SetPizzasType = ReturnType<typeof setPizzas>