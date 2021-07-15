import {createStore, combineReducers,compose} from 'redux'
import {filtersReducer} from "./reducers/filtersReducer";
import {pizzaReducer} from "./reducers/pizzaReducer";



const rootReducer = combineReducers({
    filters: filtersReducer,
    pizza: pizzaReducer,
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers())

export default store

export type RootReducerType = ReturnType<typeof rootReducer>