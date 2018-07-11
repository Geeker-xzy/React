import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from './reducer.js';
let store = createStore(reducer);
export default store;
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer.js';
// //注册thunk到applyMiddleware
// const createStoreWithMiddleware = applyMiddleware(
//   thunk
// )(createStore);
// const store = createStoreWithMiddleware(rootReducer);
// export default store;