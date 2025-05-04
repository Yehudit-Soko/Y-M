import Product from "../Components/Product";
import store from "../redux/store";
import "../Css/productsPage.css";
import Nav from "../Components/Nav";

function Products(props) {
  return (
    <>
      <Nav></Nav>
      <div>
        {console.log(store.getState().inventory.inventory)}
        {store.getState().inventory.inventory.map((element) => {
            if(props.type==element.type||props.type=="default")
          return (
            <Product
              name={element.name}
              src={element.src}
              price={element.price}
              description={element.description}
            ></Product>
          );
        })}
      </div>
    </>
  );
}
export default Products;
