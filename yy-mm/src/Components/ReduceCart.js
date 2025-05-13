import { useDispatch } from "react-redux";
import { reduce_product } from "../redux/actions";

function ReduceCart (props) {
    const dispatch = useDispatch();
    function reduce () {
        console.log(props.element);
        
        dispatch(reduce_product(props.element,1));
    }


    return(
        <div className="cart-reduse"> 
                   <button onClick={reduce}>הסר מהעגלה</button>
</div>
    )

}export default ReduceCart;