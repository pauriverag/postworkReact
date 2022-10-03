
import "./Cart.css"
function Cart (props) {
    return(
        <div  className="menu">
            <h1>Ofertas del dia</h1>
            <div className="cart">
                <h3>Carrito</h3>
                <h3 className="cart-number"> {props.carrito}</h3>
                
            </div>
        </div>
        
    )
}

export default Cart;