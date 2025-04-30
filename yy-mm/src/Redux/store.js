import { createStore, combineReducers } from 'redux';
import { inventoryReducer } from './inventoryReducers';
import { cartReducer } from './cartReducer';



const rootReducer = combineReducers({
    cart: cartReducer,
    inventory: inventoryReducer,

});

const store = createStore(rootReducer);

export default store;
