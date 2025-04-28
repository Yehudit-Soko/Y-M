function Product (props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.src}></img>
            <button></button>
            <p>{props.price}</p>
        </div>
    );
}
export default Product;