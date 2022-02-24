import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/itemReducers';

// generally have initial state with userInfomation to see if logged in
const initialState = {};

// can add any number of reducers here for different app needs
const reducer = combineReducers({
  productList: productListReducer
})

const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true})) || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;