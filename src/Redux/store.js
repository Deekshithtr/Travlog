import {createStore, applyMiddleware} from 'redux';
import itemReducer from './Reducers/itemReducer';
import {logger} from 'redux-logger';
const store=createStore(itemReducer,applyMiddleware(logger));

export default store;