import Nav from "../Components/Nav";
import Product from "../Components/Product";
import store from "../redux/store";
import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png";
import BigProduct from "../Components/BigProduct";
import ReduceCart from "../Components/ReduceCart";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ShoppingCart() {
  const cart = useSelector(state => state.cart.cart); // גישה למלאי

  {
    if (store.getState().cart.cart.length == 0) {
      return (
        <>
          <Nav></Nav> <img
            src={shoppingCartIcon}
            alt="icon"
            style={{ width: "30vw", height: "30vw", marginRight: "8px" }}
          />
        </>

      );
    }
  }
  return (
    <>
      <Nav></Nav>

      <div>
        {cart.map((element) => {
          return (
            <div>
              <BigProduct
                name={element.name}
                src={element.src}
                price={element.price}
                description=""
              ></BigProduct>
              <ReduceCart></ReduceCart>
              <button>+</button>
                <p>{element.amount}</p>
                <button>-</button>
                <button>עדכן כמות</button>
            </div>

          );
        })}
      </div>
    </>
  );
}

export default ShoppingCart;
