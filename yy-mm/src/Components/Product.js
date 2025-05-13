// Product
import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png"
import ProductModal from "./ProductModal";
import { useState } from "react";
import React from "react";
import store from "../redux/store";
// import "../css/Product.css"
// import { useDispatch } from "react-redux";
import { add_cart } from "../redux/actions"
import CartButton from "./CartButton";
import { useNavigate } from "react-router-dom";
import Icon from "../pictures/icons/shoppingCartIcon.png"



function Product(props) {
const navigate = useNavigate();


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
               
                <img  src={props.src} alt={props.name}></img>
                
                <h1>{props.name}</h1>
                <button className="details-btn" onClick={getDetails}>פרטים נוספים</button>
                <button onClick={() => navigate('/AddToCart', {
                        state: {
                            name: props.name,
                            src: props.src,
                            price: props.price,
                            description: props.description,
                            amount: props.amount
                        }
                    })}>
                     <div className="img-icon">
                        <img src={Icon} style={{ width: "50px", height: "50px" }} />
                        </div>
                    </button>     
                <p className="price">{props.price} ש"ח</p>
                {/* <p className="description">{props.description}</p> */}
            </div>
            <ProductModal  src={props.src} name={props.name} price={props.price} description={props.description} show={showModal} onClose={closeModal} />
        </>
    );
}
export default Product;