// import "../css/bigProduct.css";

function BaseProduct(props) {
  return (
    <div className="big-product-container">
      <img src={props.src} alt={props.name} />
      <h1>{props.name}</h1>
      <p className="price">{props.price} ש"ח</p>
    </div>
  );
}

export default BaseProduct;
