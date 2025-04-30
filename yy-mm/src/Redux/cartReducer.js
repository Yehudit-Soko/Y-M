import { ADD_CART } from "./actionTypes";
const cartInitialState = {

    cart: [],
};
export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_CART:

            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        default:
            return state;
    }

}