import Product from "../components/Product";
import store from "../redux/store";
import "../css/productsPage.css"

function Products() {
    return (
        <div>
            {store.getState().inventory.map(element => {
                return (
                    <Product name={element.name} src={element.src} price={element.price} description={element.description}></Product>
                )
            })
            }
        </div>
    );
}
export default Products;