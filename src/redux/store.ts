import {createStore, combineReducers,compose,applyMiddleware} from 'redux'
import {filtersReducer} from "./reducers/filtersReducer";
import {pizzaReducer} from "./reducers/pizzaReducer";
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    filters: filtersReducer,
    pizza: pizzaReducer,
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store

export type RootReducerType = ReturnType<typeof rootReducer>