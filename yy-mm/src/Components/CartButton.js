// CartButton
import { useDispatch } from "react-redux";
import { useState } from "react";
import store from "../redux/store";
import { add_cart } from "../redux/actions";
import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png"


function CartButton(props) {
        const dispatch = useDispatch();
        const [chosenProduct, setChosenProduct]  = useState({});
    function AddShoppingCart() {
       

        console.log("hjgtf");
        store.getState().inventory.forEach(element => {
            console.log("hi!!");
            if (element.name === props.name) {
                setChosenProduct(element);
                console.log("iffffffffffff");
            }
        });

        const product = store.getState().inventory.find(element => element.name === props.name);

        if (chosenProduct.amount === 0) {
            alert("המוצר אזל מהמלאי");

        }
        else {
            dispatch(add_cart(chosenProduct));
            console.log("hi");
            alert("המוצר נוסף בהצלחה")
        }

    }
    return (<button className="cart-btn" onClick={AddShoppingCart}>
        <img src={shoppingCartIcon} alt="icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
        הוסף לעגלה
    </button>);




} export default CartButton;
