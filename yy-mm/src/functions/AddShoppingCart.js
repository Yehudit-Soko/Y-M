// // import { useDispatch } from "react-redux";
// // import { add_cart } from "../Redux/actions";
// // import {add_cart} from "../redux/actions"
// import store from "../redux/store";
// import { useState } from "react";
// import Product from "../components/Product";
// import React from "react";

// function AddShoppingCart(name) {

//     // const dispatch = useDispatch();
//     const {chosenProduct,setChosenProduct}=useState({});
//     // store.getState().inventory.array.forEach(element => {
//         console.log("hjgtf");
//     store.getState().inventory.forEach(element => {
//         console.log("hi!!");
//         if (element.name === name) {
//             chosenProduct = element;
//             console.log("iffffffffffff");
//         }
//     });
//     if (chosenProduct.amount === 0) {
//         return (
//             <div>
//                 <p>המוצר אזל מהמלאי</p>
//             </div>
//         )
//     }

//     // dispatch(add_cart(chosenProduct));
//     console.log("hi")   
//     return(
//         <div>
//             {store.getState().cart.map(element => {
//                 return (
//                     <Product name={element.name} src={element.src} price={element.price}></Product>
//                 )
//             })
//             }
//         </div>
//     )
// }
// export default AddShoppingCart;