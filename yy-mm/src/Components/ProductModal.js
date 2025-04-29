import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png"
import "../css/Product.css"
import AddShoppingCart from "../functions/AddShoppingCart";
import React from "react";
import { useState } from "react";
import store from "../redux/store";
import Product from "./Product";


function ProductModal(props) {
    {
        

        if (!props.show)
            return null;
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <button onClick={props.onClose}>X</button>
                    <h1>{props.name}</h1>
                    <img src={props.src}></img>
                    <button 
                    // onClick={AddShoppingCart(props.name)}
                    >
                        <img src={shoppingCartIcon} alt="icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                    </button>
                    <p>{props.price}ש"ח</p>
                    <p>{props.description}</p>
                </div>
            </div>);
    }


}
export default ProductModal;
