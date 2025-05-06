import { reduce_product } from "./actions";
import { ADD_CART, CHANGE_PRODUCT, REDUCE_PRODUCT } from "./actionTypes";

const cartInitialState = {
    cart: [],
};

export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
            case REDUCE_PRODUCT:
                if (!action.payload ) {
                    return state; // או טיפול בשגיאה אחרת
                }
                return {
                    ...state,
                    cart: state.cart.filter(item => item.name !== action.payload.name)
                };
            
            case CHANGE_PRODUCT:
                return {
                    ...state,
                    cart: state.cart.map(item => {
                        if (action.payload.product.name === item.name) {
                            return {
                                ...item,
                                amount:action.payload.amount // החזרת אובייקט חדש עם amount מעודכן
                            };
                        }
                        return item; // החזרת האובייקט המקורי אם אינו תואם
                    })
                };
            
        default:
            return state;
    }
};
