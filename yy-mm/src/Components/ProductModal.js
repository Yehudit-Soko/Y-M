import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/productModal.css";
import BaseProduct from "./BaseProduct";

function ProductModal(props) {
  const navigate = useNavigate();

  if (!props.show) return null;

  const handleAddToCart = () => {
    navigate("/AddToCart", {
      state: {
        name: props.name,
        src: props.src,
        price: props.price,
        description: props.description,
        amount: props.amount,
      },
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={props.onClose}>X</button>

        <div className="modal-body">
          <BaseProduct
            src={props.src}
            name={props.name}
            price={props.price}
            description={props.description}
          />
        </div>

        <div className="modal-footer">
          <button className="add-to-cart" onClick={handleAddToCart}>
            <span style={{ marginRight: "6px" }}>הוסף לעגלה</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
