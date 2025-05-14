// Product
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductModal from "./ProductModal";
import Icon from "../pictures/icons/shoppingCartIcon.png"
import BaseProduct from "./BaseProduct";
// import "../css/Product.css"

function Product(props) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <>
            <div className="product-container">


                <img src={props.src} alt={props.name}></img>

                <h1>{props.name}</h1>
                <button className="details-btn" onClick={openModal}>פרטים נוספים</button>
                <button className="details-btn" onClick={() => navigate('/AddToCart', {
                    state: {
                        name: props.name,
                        src: props.src,
                        price: props.price,
                        description: props.description,
                        amount: props.amount
                    }
                })}>
                    {/* <img src={Icon} alt="הוסף לעגלה" className="cart-icon" /> */}
                      <span style={{ marginRight: '6px' }}>הוסף לעגלה</span>

                </button>

                <p className="price">{props.price} ש"ח</p>
                {/* <p className="description">{props.description}</p> */}
            </div>
            <ProductModal src={props.src} name={props.name} price={props.price} description={props.description} show={showModal} onClose={closeModal} />
        </>
    );
}
export default Product;