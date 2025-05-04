
function BigProduct(props) {
    return (

    
            <div >
                <h1>{props.name}</h1>
                <img src={props.src}></img>


                <p>{props.price}ש"ח</p>
                <p>{props.description}</p>
            </div>
    

    )

} export default BigProduct;