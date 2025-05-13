import Nav from "../Components/Nav";
import Product from "../Components/Product";
import store from "../redux/store";
import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png";
import BigProduct from "../Components/BigProduct";
import ReduceCart from "../Components/ReduceCart";
import Footer from "../Components/Footer";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shoppingCart from "../css/shoppingCart.css"
import { change_product } from "../redux/actions";

function ShoppingCart() {
  const cart = useSelector(state => state.cart.cart); // גישה לעגלת קניות
  const inventory = useSelector(state => state.inventory.inventory); // גישה למלאי
  const dispatch = useDispatch();
  const [tempAmounts, setTempAmounts] = useState(cart.map(item => item.amount));
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
        {cart.map((element,index) => {
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
                <ReduceCart element={element}></ReduceCart>

                <div className="cart-buttons-top">
                  <button onClick={() => {
                    setTempAmounts(prev => {
                      const newAmounts = [...prev];
                      newAmounts[index] += 1; // עדכון הכמות הזמנית
                      return newAmounts;
                    })}}>+</button>
                  <p>{tempAmounts[index]}</p>
                  <button onClick={() => { if (tempAmounts[index] > 1)  setTempAmounts(prev => {
                      const newAmounts = [...prev];
                      newAmounts[index] -= 1; // עדכון הכמות הזמנית
                      return newAmounts;
                    }) }}>-</button>
                </div>
                <div className="cart-buttons-amount">
                  <button onClick={() => {
                    const product = inventory.find(product => product.name === element.name);
                    if (product.amount < tempAmounts[index]) {
                      alert(`המוצר מוגבל ל-${product.amount} יחידות`);
                      return;
                    }
                    // product.amount = props.counter;

                    dispatch(change_product(element, tempAmounts[index]))
                    alert("המוצר נוסף בהצלחה");
                  }}>עדכן כמות</button>
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