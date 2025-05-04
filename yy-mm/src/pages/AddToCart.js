import { useState } from "react";
import BigProduct from "../Components/BigProduct";
import { useLocation } from 'react-router-dom';
import Nav from "../Components/Nav";
import CartButton from "../Components/CartButton";
import Footer from "../Components/Footer";




function AddToCart(props) {
    const location = useLocation();
    const { name, src, price, description } = location.state;

    const [counter, setCounter] = useState(1);
    return (<>
        <div>
            <Nav></Nav>
            <BigProduct name={name} src={src} price={price} description={description} ></BigProduct>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <p>{counter}</p>
            <button onClick={() => {
                if (counter > 1)
                    setCounter(counter - 1);
            }}>-</button>
            {/* <CartButton name={name}></CartButton> */}
        </div>
      

    </>
    )

} export default AddToCart;