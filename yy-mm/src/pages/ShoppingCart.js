import Nav from "../Components/Nav";
import Product from "../Components/Product";
import store from "../redux/store";
import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png";
import BigProduct from "../Components/BigProduct";
import ReduceCart from "../Components/ReduceCart";
import Footer from "../Components/Footer";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import shoppingCart from "../Css/shoppingCart.css"

function ShoppingCart() {
  const cart = useSelector(state => state.cart.cart); // גישה למלאי

  // const [account,setAccount]=useState(0);
  // useEffect (()=>{
  // cart.map((element)=>{
  // setAccount(account+element.price*element.amount)
  // })
  // },[cart]);

  const account = useRef(0);
  {
    if (store.getState().cart.cart.length == 0) {
      account.current = 0;
      return (
        <>
          <Nav></Nav>
          <img
            src={shoppingCartIcon}
            alt="icon"
            style={{ width: "50vw", height: "40vw", marginRight: "8px", }}
          />
        </>

      );
    }
  }
  return (
    <>
      <Nav></Nav>

      <div className="cart-container">
        {cart.map((element) => {
          account.current = (account.current += (element.price * element.amount) / 2);
          return (
            <div className="cart-item">
              <div className="cart-image">
              <img src={element.src} alt={element.name} />
              </div>
              {/* <BigProduct
                
                description=""
              ></BigProduct> */}
               <div className="cart-details">
          <h1>{element.name}</h1>
          <p>{element.price} ש"ח</p>
              <ReduceCart></ReduceCart>
              <div className="cart-buttons">
                <button>+</button>
                <p>{element.amount}</p>
                <button>-</button>
                <button>עדכן כמות</button>
                </div>
              </div>
            </div>

          );
        })}
  <h1 className="total-amount">הסכום לתשלום : {account.current} ש"ח</h1>
  </div>
    </>
  );
}

export default ShoppingCart;