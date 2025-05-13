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
                <BaseProduct name={props.name} src={props.src} price={props.p}></BaseProduct>
                <button className="details-btn" onClick={openModal}>פרטים נוספים</button>
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
            </div>
            <ProductModal  src={props.src} name={props.name} price={props.price} description={props.description} show={showModal} onClose={closeModal} />
        </>
    );
}
export default Product;