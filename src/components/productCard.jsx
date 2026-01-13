import "./productCard.css"
export default  function ProductCard(props){
    console.log(props.price)
    return(
        <div>
            <img src={props.img}/>
            <span>{props.name}</span>
            <span>LKR. {props.price}</span>
            <h1>Product Card</h1>
        </div>
    )

}