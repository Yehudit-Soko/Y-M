import Product from "../components/Product";
import store from "../Redux/store";

function Products () {
    return (
        <div>
            {store.getState()}
        </div>
    );
}
export default Products;