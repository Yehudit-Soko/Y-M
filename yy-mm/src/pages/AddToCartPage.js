import { useState } from "react";
import BigProduct from "../components/BaseProduct";
import { useLocation } from 'react-router-dom';
import Nav from "../components/Nav";
import CartButton from "../components/CartButton";
import Footer from "../components/Footer";

function AddToCart(props) {
    const location = useLocation();
    const { name, src, price, description, amount } = location.state;

    const [counter, setCounter] = useState(1);

    return (
        <>
            <div>
                <Nav />
                <BigProduct name={name} src={src} price={price} description={description} />
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <p>{counter}</p>
                <button onClick={() => {
                    if (counter > 1) {
                        setCounter(counter - 1);
                    } else {
                        alert("לא ניתן להוריד את הכמות מתחת ל-1");
                    }
                }}>-</button>
                <CartButton name={name} counter={counter} /> {/* הפעלת כפתור הוספת המוצר לעגלה */}
            </div>

           
        </>
    );
}

export default AddToCart;
