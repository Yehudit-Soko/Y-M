import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add_cart } from "../redux/actions";
import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png";

function CartButton(props) {
    const dispatch = useDispatch();
    const inventory = useSelector(state => state.inventory.inventory); // גישה למלאי
    const [chosenProduct, setChosenProduct] = useState({});

    function AddShoppingCart() {
        const product = inventory.find(element => element.name === props.name);

        if (!product) {
            alert("המוצר לא נמצא במלאי");
            return;
        }

        setChosenProduct(product); // עדכון המוצר שנבחר

        if (product.amount === 0) {
            alert("המוצר אזל מהמלאי");
            return;
        }

        if (product.amount < props.counter) {
            alert(`המוצר מוגבל ל-${product.amount} יחידות`);
            return;
        }
        product.amount=props.counter;

        dispatch(add_cart(product));
        alert("המוצר נוסף בהצלחה");
    }

    return (
        <button className="cart-btn" onClick={AddShoppingCart}>
            <img src={shoppingCartIcon} alt="icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            הוסף לעגלה
        </button>
    );
}

export default CartButton;
