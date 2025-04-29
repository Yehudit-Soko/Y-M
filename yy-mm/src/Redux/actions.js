import { REDUCE_PRODUCT,ADD_CART } from "./actionTypes";

export const reduce_product = () => ({
    type: REDUCE_PRODUCT,
});
export  const add_cart = (product) => ({
    type: ADD_CART,
    payload: product,
});
// export const find_product = (name) => ({
//     type: FIND_PRODUCT,
//     payload: name,
// });
