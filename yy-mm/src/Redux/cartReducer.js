import { ADD_CART } from "./actionTypes";
const cartInitialState = {

    cart: [{ name: "גיטרה קלאסית", price: 430,  description: "לחיעבכי", amount: 5 ,type:"guitar"},
        { name: "גיטרה חשמלית", price: 5430,  description: "לחיעבכי", amount: 0 ,type:"guitar"},
        { name: "גיטרה אקוסטית", price: 1785, description: "לחיעבכי", amount: 5 ,type:"guitar"},
        { name: "פסנתר כנף", price: 32900, description: "לחיעבכי", amount: 5 ,type:"piano"}],
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