// Product
import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png"
import ProductModal from "./ProductModal";
import { useState } from "react";
import React from "react";
import store from "../redux/store";
import "../css/product.css"
// import { useDispatch } from "react-redux";
import { add_cart } from "../redux/actions"
import CartButton from "./CartButton";

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
                <button className="abc-btn">הוסף לעגלה</button>
                {/* <CartButton name={props.name}></CartButton> */}
                <p className="price">{props.price} ש"ח</p>
                <p className="description">{props.description}</p>
            </div>
            <ProductModal name={props.name} src={props.src} price={props.price} description={props.description} show={showModal} onClose={closeModal} />
        </>
    );
}
export default Product;