import Nav from "../components/Nav";
import Product from "../components/Product";
import store from "../redux/store";
import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png";
import ReduceCart from "../components/ReduceCart";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shoppingCart from "../css/shoppingCart.css"
import { change_product } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { reduce_product } from "../redux/actions";

function ShoppingCart() {
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart.cart); // גישה לעגלת קניות
  const inventory = useSelector(state => state.inventory.inventory); // גישה למלאי
  const dispatch = useDispatch();
  const [tempAmounts, setTempAmounts] = useState(cart.map(item => item.amount));
  const [account, setAccount] = useState(() => {
    let sum = 0;
    cart.map((element) => {
      sum += (element.price * element.amount)
      console.log(sum);
    });
    return sum;
  });
  {
    if (store.getState().cart.cart.length == 0) {
      // account.current = 0;
      return (
        <>
          <Nav></Nav>
          <img
            src={shoppingCartIcon}
            alt="icon"
            style={{ width: "50vw", height: "40vw", marginRight: "8px", }}
          />
          <Footer></Footer>
        </>
      );
    }
  }
  return (
    <>
      <Nav></Nav>

      <div className="cart-container">
        {cart.map((element, index) => {
          // account.current = (account.current += (element.price * element.amount) / 2);
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
                {/* <ReduceCart element={element}></ReduceCart> */}
                <div className="cart-reduse"> 
              <button className="cart-reduse" onClick={()=>{
                dispatch(reduce_product(element,1));
              setAccount(account-(element.price*element.amount))
              }}>הסר מהעגלה</button>
        </div>

                <div className="cart-buttons-top">
                  <button onClick={() => {
                    const product = inventory.find(product => product.name === element.name);
                    if (product.amount < tempAmounts[index] + 1) {
                      alert(`המוצר מוגבל ל-${product.amount} יחידות`);
                      return tempAmounts;
                    }
                    dispatch(change_product(element, tempAmounts[index] + 1))
                    setAccount(((account) + element.price));
                    setTempAmounts(prev => {
                      const newAmounts = [...prev];
                      newAmounts[index] += 1; // עדכון הכמות הזמנית
                      return newAmounts;
                    })
                  }}>+</button>
                  <p>{tempAmounts[index]}</p>
                  <button onClick={() => {
                    const product = inventory.find(product => product.name === element.name);
                    if (tempAmounts[index] - 1 <= 0) {
                      return;
                    }
                    dispatch(change_product(element, tempAmounts[index] - 1))
                    setAccount(account - element.price);
                    setTempAmounts(prev => {
                      const newAmounts = [...prev];
                      newAmounts[index] -= 1; // עדכון הכמות הזמנית
                      return newAmounts;
                    })
                  }}>-</button>
                </div>
              </div>
            </div>

          );
        })}
        <h1 className="total-amount">הסכום לתשלום : {account} ש"ח</h1>
        <button onClick={() => navigate('/checkOut')}>לתשלום</button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ShoppingCart;