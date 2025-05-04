import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png"
import "../Css/productModal.css"
// import AddShoppingCart from "../functions/AddShoppingCart";
import React from "react";
// import { useState } from "react";
import store from "../redux/store";
import Product from "./Product";
import CartButton from "./CartButton";
import BigProduct from "./BigProduct";
import Icon from "../pictures/icons/shoppingCartIcon.png"
import { useNavigate } from 'react-router-dom';

import AddToCart from "../pages/AddToCart";


function ProductModal(props) {
    {

        const navigate = useNavigate();
        if (!props.show)
            return null;
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <button onClick={props.onClose}>X</button>

                    <BigProduct name={props.name} src={props.src} price={props.price} description={props.description} ></BigProduct>
                    <button onClick={() => navigate('/AddToCart', {
                        state: {
                            name: props.name,
                            src: props.src,
                            price: props.price,
                            description: props.description
                        }
                    })}>
                    
                        <img src={Icon} style={{ width: "50px", height: "50px" }} />
                    </button>
                </div>
            </div >

        );
    }


}
export default ProductModal;
