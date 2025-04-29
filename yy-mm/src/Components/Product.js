import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png"
import ProductModal from "./ProductModal";
import { useState } from "react";
import AddShoppingCart from "../functions/AddShoppingCart";
import React from "react";
import store from "../redux/store";




function Product(props) {

    const [showModal, setShowModal] = useState(false);

    function getDetails() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false);
    }
    return (
        <>
            <div>
                <h1>{props.name}</h1>
                <img src={props.src}></img>
                <button 
                onClick={setShowModal}
                >פרטים נוספים</button>
                <button 
                // onClick={AddShoppingCart(props.name)}
                >
                    <img src={shoppingCartIcon} alt="icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                </button>
                <p>{props.price}ש"ח</p>
                <p>{props.description}</p>
            </div>
            <ProductModal name={props.name} src={props.src} price={props.price} description={props.description} show={showModal} onClose={closeModal}></ProductModal>
        </>
    );
}
export default Product;