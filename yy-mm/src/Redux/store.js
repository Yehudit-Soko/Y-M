import { createStore } from 'redux';
import { inventoryReducer } from './reducers';

export const store = createStore(inventoryReducer);

export default store;