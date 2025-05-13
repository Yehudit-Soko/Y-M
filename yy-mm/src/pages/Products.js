import Product from "../Components/Product";
import store from "../redux/store";
import "../css/productsPage.css";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Products(props) {
  return (
    <>
      <Nav></Nav>
        <nav className="nav_small">
          <li><Link to="/piano">פסנתרים</Link></li>
          <li><Link to="/violin">כינורות</Link></li>
          <li><Link to="/guitar">גיטרות</Link></li>
          <li><Link to="/special">המיוחדים שלנו</Link></li>
        </nav>
    
      <div className="products">
     
        {console.log(store.getState().inventory.inventory)        }
        {store.getState().inventory.inventory.map((element) => {
            if(props.type==element.type||props.type=="default")
          return (
            <Product
              src={element.src}
              name={element.name}
              price={element.price}
              description={element.description}
              amount = {element.amount}
            ></Product>
          );
        })}
      </div>
    </>
  );
}
export default Products;
