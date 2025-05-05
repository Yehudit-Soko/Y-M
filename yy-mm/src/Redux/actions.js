import { REDUCE_PRODUCT,ADD_CART, CHANGE_PRODUCT } from "./actionTypes";

export const reduce_product = (product) => ({
    type: REDUCE_PRODUCT,
    payload: product,
});
export  const add_cart = (product) => ({
    type: ADD_CART,
    payload: product,
});
export const change_product=(product,amount)=>({
    type: CHANGE_PRODUCT,
    payload: product,amount,
});
// export const find_product = (name) => ({
//     type: FIND_PRODUCT,
//     payload: name,
// });
