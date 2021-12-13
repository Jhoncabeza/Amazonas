import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { reducerData } from '../reducers/reducerData';


const composeEnhancers = (typeof window !== 'undefined' &&
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) || compose;

const reducers = combineReducers({
    product: reducerData
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)