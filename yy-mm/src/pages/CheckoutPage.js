import React, { useState } from "react";
// import "../css/checkout.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { reduce_product } from "../redux/actions";
import { useNavigate } from "react-router-dom";




function CheckOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [account,setAccount]=useState(0);
  let total = 0;
  const cart = useSelector(state => state.cart.cart);
  const inventory = useSelector(state => state.inventory.inventory);
  function finishOrder() {
    cart.forEach((element)=>{
       const product = inventory.find(e=> e.name === element.name);

      if(product.amount>=element.amount) {
        dispatch(reduce_product(product,element.amount));
        total+=element.amount * element.price;
      }
      else{
        alert("שים לב!\n נותרו "+product.amount+"יחידות מ"+product.name);
        dispatch(reduce_product(product,product.amount));
        total+=product.amount*element.price;
      }
     
    })
    alert('ההזמנה בוצעה בהצלחה\n סה"כ:'+total);
    navigate('/contactUs');
  }
  return (
  <>
  <Nav></Nav>
  <form className="checkout-form" onSubmit={finishOrder}>
  <h2>טופס תשלום</h2>
  
  <div className="form-columns">
    {/* עמודה 1: פרטים אישיים */}
    <div className="personal-details">
      <div className="form-group">
        <label>שם:</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>כתובת רחוב:</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>עיר:</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>מיקוד:</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>טלפון:</label>
        <input type="text" required min="9" max="10" />
      </div>
      <div className="form-group">
        <label>כתובת אימייל:</label>
        <input type="email" required />
      </div>
      <div className="form-group">
        <label>הערות:</label>
        <input type="text" />
      </div>
    </div>

    {/* עמודה 2: פרטי כרטיס אשראי */}
    <div className="credit-card-details">
      <h3>פרטי כרטיס האשראי:</h3>
      <div className="form-group">
        <label>מספר אשראי:</label>
        <input type="text" required min="14" max="16" />
      </div>
      <div className="form-group">
        <label>תוקף:</label>
        <div className="expiry-fields">
          <input type="number" required placeholder="חודש" min="1" max="12" />
          <input type="number" required placeholder="שנה" min="2025" max="2040" />
        </div>
      </div>
      <div className="form-group">
        <label>3 ספרות בגב הכרטיס:</label>
        <input type="text" required pattern="^\d{3}$" />
      </div>
      <div className="form-group">
        <label>שם בעל הכרטיס:</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>מ"ז של בעל הכרטיס:</label>
        <input type="text" required min="6" max="9" />
      </div>
    </div>
  </div>

  <button type="submit" className="checkout-button">בצע תשלום</button>
</form>


  </>

  );
}

export default CheckOut;


