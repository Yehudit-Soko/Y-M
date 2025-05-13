import "../css/bigProduct.css";

function BigProduct(props) {
  return (
    <div className="big-product-container">
      <h1>{props.name}</h1>
      <img src={props.src} alt={props.name} />
      <p className="price">{props.price} ש"ח</p>
      <p>{props.description}</p>
      
    </div>
  );
}

export default BigProduct;
