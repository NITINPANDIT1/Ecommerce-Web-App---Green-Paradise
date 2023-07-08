import {legacy_createStore,applyMiddleware} from 'redux'
import { reducer } from './reducer';
import thunk from 'redux-thunk';

// NOTE: use this store variable to create a store.
const Store = legacy_createStore(reducer,applyMiddleware(thunk));

export { Store };