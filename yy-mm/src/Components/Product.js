import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png"
import ProductModal from "./ProductModal";
import { useState } from "react";
import AddShoppingCart from "../functions/AddShoppingCart";
import React from "react";
import store from "../redux/store";
import "../css/productsPage.css"




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
            <div className="product-container">
                <h1>{props.name}</h1>
                <img src={props.src} alt={props.name}></img>
                <button className="details-btn" onClick={getDetails}>פרטים נוספים</button>
                <button className="cart-btn">
                    <img src={shoppingCartIcon} alt="icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                    הוסף לעגלה
                </button>
                <p className="price">{props.price} ש"ח</p>
                <p className="description">{props.description}</p>
            </div>
            <ProductModal name={props.name} src={props.src} price={props.price} description={props.description} show={showModal} onClose={closeModal} />
        </>
    );
}
export default Product;