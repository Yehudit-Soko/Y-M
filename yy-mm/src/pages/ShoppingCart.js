import Nav from "../Components/Nav";
import Product from "../Components/Product";
import store from "../redux/store";
import shoppingCartIcon from "../pictures/icons/shoppingCartIcon.png";
import BigProduct from "../Components/BigProduct";
import ReduceCart from "../Components/ReduceCart";
import Footer from "../Components/Footer";

function ShoppingCart() {
  {
    if (store.getState().cart.cart.length == 0) {
      return (
        <>
          <Nav></Nav> <img
            src={shoppingCartIcon}
            alt="icon"
            style={{ width: "30vw", height: "30vw", marginRight: "8px" }}
          />
        </>

      );
    }
  }
  return (
    <>
      <Nav></Nav>

      <div>
        {store.getState().cart.cart.map((element) => {
          return (
            <div>
              <BigProduct
                name={element.name}
                src={element.src}
                price={element.price}
                description=""
              ></BigProduct>
              <ReduceCart></ReduceCart>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShoppingCart;
