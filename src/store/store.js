import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from './reducer.js';
let store = createStore(reducer);
export default store;